#!/bin/bash
status=(`sudo /etc/init.d/weewx status`);
if [ "${status[-1]}" = "running." ]
then 
	if [ "${status[-2]}" = "not" ]
	then
		echo "weewx doesn't seem to be running. Let me try starting..";
		s=(`sudo /etc/init.d/weewx start`);
		echo ${s[@]};
	fi
fi
