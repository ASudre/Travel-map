#!/usr/bin/env bash

DATE=`date +%Y%m%d_%H%M%S`

# TAG
docker tag travel-map_api:latest asudre/travel-map:api_latest
docker tag travel-map_api:latest asudre/travel-map:api_${DATE}

# PUSH
docker push asudre/travel-map:api_${DATE}
docker push asudre/travel-map:api_latest
