#!/usr/bin/env bash

DATE=`date +%Y%m%d_%H%M%S`

# TAG
docker tag travel-map_public:latest asudre/travel-map:public_latest
docker tag travel-map_public:latest asudre/travel-map:public_${DATE}

# PUSH
docker push asudre/travel-map:public_${DATE}
docker push asudre/travel-map:public_latest
