FROM elixir:latest

ENV NODE_VERSION 12.x

RUN curl -sL https://deb.nodesource.com/setup_${NODE_VERSION} | bash \
  && apt-get install -y nodejs && apt-get install -y inotify-tools

RUN npm install npm@latest -g

RUN mix local.hex --force && \
  mix archive.install hex phx_new --force && \
  mix local.rebar --force

WORKDIR /app

