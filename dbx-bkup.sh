now=`date +"%d-%m-%y-%T"`;
sudo zip -r stationname-$now /etc/weewx/* /var/lib/weewx/* /var/www/weewx/* /var/log/syslog
sudo /home/pi/Dropbox-Uploader/dropbox_uploader.sh upload stationname-$now.zip DROPBOXSTATIONFOLDER/stationname-$now.zip
sudo rm *.zip
