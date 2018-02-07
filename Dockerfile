FROM centos:latest

RUN curl --silent --location https://rpm.nodesource.com/setup_6.x | bash -
RUN yum -y install wget
RUN wget https://dl.yarnpkg.com/rpm/yarn.repo -O /etc/yum.repos.d/yarn.repo
RUN yum install -y nodejs yarn which git make gcc-c++
RUN npm install -g n

RUN useradd docker

WORKDIR /home/reporting

ADD .nvmrc /home/reporting/
RUN n $(cat .nvmrc)

ADD .npmrc package.json yarn.lock /home/reporting/
RUN yarn --pure-lockfile

ENV NODE_ENV=production
ENV PORT=8912
EXPOSE 8912

ADD . /home/reporting

CMD ["node", "index.js"]
