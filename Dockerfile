FROM ubuntu:latest
LABEL authors="olegkulikov"

ENTRYPOINT ["top", "-b"]