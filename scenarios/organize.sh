places=("Bangor" "Springfield" "Burlington" "Syracuse" "Cleveland" "Madison" "StLouis" "Vail" "Bozeman" "LasVegas" "Bend");
variables=("precep" "tmin" "tmax");
months=("1" "2" "3" "4" "5" "6" "7" "8" "9" "10" "11" "12");
rcps=("0" "1" "2" "3");
anomolies=("2020" "2050" "2080");


for pl in "${places[@]}"
do
	place="$pl";
	vcount=0;

	for pvar in "${variables[@]}"
	do
		jan=();
		feb=();
		mar=();
		apr=();
		may=();
		jun=();
		jul=();
		aug=();
		sep=();
		oct=();
		nov=();
		dec=();

		sheet="";

		for m in "${months[@]}"
		do

			for r in "${rcps[@]}"
			do

				for a in "${anomolies[@]}"
				do

					nf="Downloads/$place/$pvar/$place-$m-$a-$vcount-$r-.csv";

					#echo $nf;

					var=`sudo awk -v line="6" -v field="3" 'NR==line{print $field}' $nf`;

					#echo $var;

					# jan+=($var);

					if [ "$m" = "1" ]
					then 
						jan+=($var);
					elif [ "$m" = "2" ]
					then 
						feb+=($var);
					elif [ "$m" = "3" ]
					then 
						mar+=($var);
					elif [ "$m" = "4" ]
					then 
						apr+=($var);
					elif [ "$m" = "5" ]
					then 
						may+=($var);
					elif [ "$m" = "6" ]
					then 
						jun+=($var);
					elif [ "$m" = "7" ]
					then 
						jul+=($var);
					elif [ "$m" = "8" ]
					then 
						aug+=($var);
					elif [ "$m" = "9" ]
					then 
						sep+=($var);
					elif [ "$m" = "10" ]
					then 
						oct+=($var);
					elif [ "$m" = "11" ]
					then 
						nov+=($var);
					elif [ "$m" = "12" ]
					then 
						dec+=($var);
					fi
				done

			done


		done

		sheet="$sheet January, 2020s, 2050s, 2080s\n";
		sheet="$sheet RCP2.6, ${jan[0]}, ${jan[1]}, ${jan[2]}\n";
		sheet="$sheet RCP4.5, ${jan[3]}, ${jan[4]}, ${jan[5]}\n";
		sheet="$sheet RCP6, ${jan[6]}, ${jan[7]}, ${jan[8]}\n";
		sheet="$sheet RCP8.5, ${jan[9]}, ${jan[10]}, ${jan[11]}\n";
		sheet="$sheet  , , , \n";

		sheet="$sheet February, 2020s, 2050s, 2080s\n";
		sheet="$sheet RCP2.6, ${feb[0]}, ${feb[1]}, ${feb[2]}\n";
		sheet="$sheet RCP4.5, ${feb[3]}, ${feb[4]}, ${feb[5]}\n";
		sheet="$sheet RCP6, ${feb[6]}, ${feb[7]}, ${feb[8]}\n";
		sheet="$sheet RCP8.5, ${feb[9]}, ${feb[10]}, ${feb[11]}\n";
		sheet="$sheet  , , , \n";

		sheet="$sheet March, 2020s, 2050s, 2080s\n";
		sheet="$sheet RCP2.6, ${mar[0]}, ${mar[1]}, ${mar[2]}\n";
		sheet="$sheet RCP4.5, ${mar[3]}, ${mar[4]}, ${mar[5]}\n";
		sheet="$sheet RCP6, ${mar[6]}, ${mar[7]}, ${mar[8]}\n";
		sheet="$sheet RCP8.5, ${mar[9]}, ${mar[10]}, ${mar[11]}\n";
		sheet="$sheet  , , , \n";

		sheet="$sheet April, 2020s, 2050s, 2080s\n";
		sheet="$sheet RCP2.6, ${apr[0]}, ${apr[1]}, ${apr[2]}\n";
		sheet="$sheet RCP4.5, ${apr[3]}, ${apr[4]}, ${apr[5]}\n";
		sheet="$sheet RCP6, ${apr[6]}, ${apr[7]}, ${apr[8]}\n";
		sheet="$sheet RCP8.5, ${apr[9]}, ${apr[10]}, ${apr[11]}\n";
		sheet="$sheet  , , , \n";

		sheet="$sheet May, 2020s, 2050s, 2080s\n";
		sheet="$sheet RCP2.6, ${may[0]}, ${may[1]}, ${may[2]}\n";
		sheet="$sheet RCP4.5, ${may[3]}, ${may[4]}, ${may[5]}\n";
		sheet="$sheet RCP6, ${may[6]}, ${may[7]}, ${may[8]}\n";
		sheet="$sheet RCP8.5, ${may[9]}, ${may[10]}, ${may[11]}\n";
		sheet="$sheet  , , , \n";

		sheet="$sheet June, 2020s, 2050s, 2080s\n";
		sheet="$sheet RCP2.6, ${jun[0]}, ${jun[1]}, ${jun[2]}\n";
		sheet="$sheet RCP4.5, ${jun[3]}, ${jun[4]}, ${jun[5]}\n";
		sheet="$sheet RCP6, ${jun[6]}, ${jun[7]}, ${jun[8]}\n";
		sheet="$sheet RCP8.5, ${jun[9]}, ${jun[10]}, ${jun[11]}\n";
		sheet="$sheet  , , , \n";

		sheet="$sheet July, 2020s, 2050s, 2080s\n";
		sheet="$sheet RCP2.6, ${jul[0]}, ${jul[1]}, ${jul[2]}\n";
		sheet="$sheet RCP4.5, ${jul[3]}, ${jul[4]}, ${jul[5]}\n";
		sheet="$sheet RCP6, ${jul[6]}, ${jul[7]}, ${jul[8]}\n";
		sheet="$sheet RCP8.5, ${jul[9]}, ${jul[10]}, ${jul[11]}\n";
		sheet="$sheet  , , , \n";

		sheet="$sheet August, 2020s, 2050s, 2080s\n";
		sheet="$sheet RCP2.6, ${aug[0]}, ${aug[1]}, ${aug[2]}\n";
		sheet="$sheet RCP4.5, ${aug[3]}, ${aug[4]}, ${aug[5]}\n";
		sheet="$sheet RCP6, ${aug[6]}, ${aug[7]}, ${aug[8]}\n";
		sheet="$sheet RCP8.5, ${aug[9]}, ${aug[10]}, ${aug[11]}\n";
		sheet="$sheet  , , , \n";

		sheet="$sheet September, 2020s, 2050s, 2080s\n";
		sheet="$sheet RCP2.6, ${sep[0]}, ${sep[1]}, ${sep[2]}\n";
		sheet="$sheet RCP4.5, ${sep[3]}, ${sep[4]}, ${sep[5]}\n";
		sheet="$sheet RCP6, ${sep[6]}, ${sep[7]}, ${sep[8]}\n";
		sheet="$sheet RCP8.5, ${sep[9]}, ${sep[10]}, ${sep[11]}\n";
		sheet="$sheet  , , , \n";

		sheet="$sheet October, 2020s, 2050s, 2080s\n";
		sheet="$sheet RCP2.6, ${oct[0]}, ${oct[1]}, ${oct[2]}\n";
		sheet="$sheet RCP4.5, ${oct[3]}, ${oct[4]}, ${oct[5]}\n";
		sheet="$sheet RCP6, ${oct[6]}, ${oct[7]}, ${oct[8]}\n";
		sheet="$sheet RCP8.5, ${oct[9]}, ${oct[10]}, ${oct[11]}\n";
		sheet="$sheet  , , , \n";

		sheet="$sheet November, 2020s, 2050s, 2080s\n";
		sheet="$sheet RCP2.6, ${nov[0]}, ${nov[1]}, ${nov[2]}\n";
		sheet="$sheet RCP4.5, ${nov[3]}, ${nov[4]}, ${nov[5]}\n";
		sheet="$sheet RCP6, ${nov[6]}, ${nov[7]}, ${nov[8]}\n";
		sheet="$sheet RCP8.5, ${nov[9]}, ${nov[10]}, ${nov[11]}\n";
		sheet="$sheet  , , , \n";

		sheet="$sheet December, 2020s, 2050s, 2080s\n";
		sheet="$sheet RCP2.6, ${dec[0]}, ${dec[1]}, ${dec[2]}\n";
		sheet="$sheet RCP4.5, ${dec[3]}, ${dec[4]}, ${dec[5]}\n";
		sheet="$sheet RCP6, ${dec[6]}, ${dec[7]}, ${dec[8]}\n";
		sheet="$sheet RCP8.5, ${dec[9]}, ${dec[10]}, ${dec[11]}\n";
		sheet="$sheet  , , , \n";

		 (( vcount++ ));

		echo -e $sheet >> $place-$pvar.csv;

	done
	
done
