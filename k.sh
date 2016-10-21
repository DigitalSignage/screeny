i#!/bin/bash
intertube=0
while [ $intertube -ne 1 ]; do
       ps -W | awk ''/chrome/,NF=1'' | xargs kill -f
       echo killing
       sleep 3
        
done
