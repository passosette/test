	var timer;
	var search;
	var box;

	var set_value;
	var place;
	var count;
	var search_time_now;
	var search_time_old;
	var n;
	var i;
	var key;


	window.onload = function()
	{
		document.getElementById("stop").disabled = true; //蛛懈ｭ｢繝懊ち繝ｳ髱槭い繧ｯ繝�ぅ繝�
		document.getElementById("start").disabled = false; //髢句ｧ九�繧ｿ繝ｳ繧｢繧ｯ繝�ぅ繝�
		document.getElementById("crear").disabled = true; //蛛懈ｭ｢繝懊ち繝ｳ髱槭い繧ｯ繝�ぅ繝�

		document.getElementById("search").readOnly = false;//讀懃ｴ｢蜈･蜉帙お繝ｪ繧｢繧｢繧ｯ繝�ぅ繝�
		document.getElementById("place").disabled = false;//讀懃ｴ｢譁ｹ豕輔い繧ｯ繝�ぅ繝�

		document.getElementById("stop").onclick = stop;
		document.getElementById("start").onclick = start;

		box = document.getElementById("search");
		document.getElementById("search").value = "検索トリップを入力してください";
		box.className = "search_open_style";
		//document.getElementById("str").innerHTML = "<b>現在検索中です。</b>";

		count = 0;
		n = 0;
		i = 0;
	}

	function rand_view()
	{
		/*
		var rand1 = Math.floor(Math.random()*(9-5)+5);
		var rand2 = Math.floor(Math.random()*(9-5)+5);
		var rand3 = Math.floor(Math.random()*(9-5)+5);
		var rand4 = Math.floor(Math.random()*(9-5)+5);
		var rand5 = Math.floor(Math.random()*(9-5)+5);
		var rand6 = Math.floor(Math.random()*(9-5)+5);
		var rand7 = Math.floor(Math.random()*(9-5)+5);
		var rand8 = Math.floor(Math.random()*(9-5)+5);
		var rand9 = Math.floor(Math.random()*(9-5)+5);
		var rand10 = Math.floor(Math.random()*(9-5)+5);
		*/

		if(i == 0)
		{
			i = 1;

			key = randobet(2,'./');
		}

		if(i == 2000)
		{
			i = 1;

			key = randobet(2,'./');
		}

		/*!"#$%&\'()*+,-./0123456789:;<=>?@�｡�｢�｣�､�･�ｦ�ｧ�ｨ�ｩ�ｪ�ｫ�ｬ�ｭ�ｮ�ｯ�ｰ�ｱ�ｲ�ｳ�ｴ�ｵ[\]^_��ｾゑｾ�ｾ�ｾ�ｾ�ｾ�ｾ茨ｾ会ｾ奇ｾ具ｾ鯉ｾ搾ｾ趣ｾ擾ｾ撰ｾ托ｾ抵ｾ難ｾ費ｾ包ｾ厄ｾ暦ｾ假ｾ呻ｾ夲ｾ幢ｾ懶ｾ晢ｾ橸ｾ滂ｽｶ�ｷ�ｸ�ｹ�ｺ�ｻ�ｼ�ｽ�ｾ�ｿ�*/
		var tripkey1 = randobet(5,'./');
		var tripkey2 = randobet(5,'./');
		var tripkey3 = randobet(5,'./');
		var tripkey4 = randobet(5,'./');
		var tripkey5 = randobet(5,'./');
		var tripkey6 = randobet(5,'./');
		var tripkey7 = randobet(5,'./');
		var tripkey8 = randobet(5,'./');
		var tripkey9 = randobet(5,'./');
		var tripkey10 = randobet(5,'./');
		
		var tripkey1_2 = randobet(1,'./');
		var tripkey2_2 = randobet(1,'./');
		var tripkey3_2 = randobet(1,'./');
		var tripkey4_2 = randobet(1,'./');
		var tripkey5_2 = randobet(1,'./');
		var tripkey6_2 = randobet(5,'./');
		var tripkey7_2 = randobet(5,'./');
		var tripkey8_2 = randobet(5,'./');
		var tripkey9_2 = randobet(5,'./');
		var tripkey10_2 = randobet(5,'./');
		
		tripkey1 = tripkey1_2+key+tripkey1;
		tripkey2 = tripkey2_2+key+tripkey2;
		tripkey3 = tripkey3_2+key+tripkey3;
		tripkey4 = tripkey4_2+key+tripkey4;
		tripkey5 = tripkey5_2+key+tripkey5;
		tripkey6 = tripkey6_2+key+tripkey6;
		tripkey7 = tripkey7_2+key+tripkey7;
		tripkey8 = tripkey8_2+key+tripkey8;
		tripkey9 = tripkey9_2+key+tripkey9;
		tripkey10 = tripkey10_2+key+tripkey10;
		
		var str_obj1 = tripkey1+"H.";
		var str_obj2 = tripkey2+"H.";
		var str_obj3 = tripkey3+"H.";
		var str_obj4 = tripkey4+"H.";
		var str_obj5 = tripkey5+"H.";
		var str_obj6 = tripkey6+"H.";
		var str_obj7 = tripkey7+"H.";
		var str_obj8 = tripkey8+"H.";
		var str_obj9 = tripkey9+"H.";
		var str_obj10 = tripkey10+"H.";
		
		var salt1 = str_obj1.substr(1,2);
		var salt2 = str_obj2.substr(1,2);
		var salt3 = str_obj3.substr(1,2);
		var salt4 = str_obj4.substr(1,2);
		var salt5 = str_obj5.substr(1,2);
		var salt6 = str_obj6.substr(1,2);
		var salt7 = str_obj7.substr(1,2);
		var salt8 = str_obj8.substr(1,2);
		var salt9 = str_obj9.substr(1,2);
		var salt10 = str_obj10.substr(1,2);
		
		var trip_obj1 = des.crypt(tripkey1,salt1);
		var trip_obj2 = des.crypt(tripkey2,salt2);
		var trip_obj3 = des.crypt(tripkey3,salt3);
		var trip_obj4 = des.crypt(tripkey4,salt4);
		var trip_obj5 = des.crypt(tripkey5,salt5);
		var trip_obj6 = des.crypt(tripkey6,salt6);
		var trip_obj7 = des.crypt(tripkey7,salt7);
		var trip_obj8 = des.crypt(tripkey8,salt8);
		var trip_obj9 = des.crypt(tripkey9,salt9);
		var trip_obj10 = des.crypt(tripkey10,salt10);
		
		var trip1 = trip_obj1.substr(-10);
		var trip2 = trip_obj2.substr(-10);
		var trip3 = trip_obj3.substr(-10);
		var trip4 = trip_obj4.substr(-10);
		var trip5 = trip_obj5.substr(-10);
		var trip6 = trip_obj6.substr(-10);
		var trip7 = trip_obj7.substr(-10);
		var trip8 = trip_obj8.substr(-10);
		var trip9 = trip_obj9.substr(-10);
		var trip10 = trip_obj10.substr(-10);
		
		document.getElementById("tripkey1").value = '#'+tripkey1;
		document.getElementById("trip1").value = '◆'+trip1;
		n += 1;

		document.getElementById("tripkey2").value = '#'+tripkey2;
		document.getElementById("trip2").value = '◆'+trip2;
		n += 1;

		document.getElementById("tripkey3").value = '#'+tripkey3;
		document.getElementById("trip3").value = '◆'+trip3;
		n += 1;

		document.getElementById("tripkey4").value = '#'+tripkey4;
		document.getElementById("trip4").value = '◆'+trip4;
		n += 1;

		document.getElementById("tripkey5").value = '#'+tripkey5;
		document.getElementById("trip5").value = '◆'+trip5;
		n += 1;

		document.getElementById("tripkey6").value = '#'+tripkey6;
		document.getElementById("trip6").value = '◆'+trip6;
		n += 1;
		
		document.getElementById("tripkey7").value = '#'+tripkey7;
		document.getElementById("trip7").value = '◆'+trip7;
		n += 1;
		
		document.getElementById("tripkey8").value = '#'+tripkey8;
		document.getElementById("trip8").value = '◆'+trip8;
		n += 1;
		
		document.getElementById("tripkey9").value = '#'+tripkey9;
		document.getElementById("trip9").value = '◆'+trip9;
		n += 1;
		
		document.getElementById("tripkey10").value = '#'+tripkey10;
		document.getElementById("trip10").value = '◆'+trip10;
		n += 1;
		
		i += 1;

		var rep1;
		var rep2;
		var rep3;
		var rep4;
		var rep5;
		var rep6;
		var rep7;
		var rep8;
		var rep9;
		var rep10;
		var flag = 0;
		var view_trip = '';

		if(place == 1)
		{
			reg = new RegExp("^"+set_value);
		}
		else if(place == 2)
		{
			reg = new RegExp(set_value+"$");
		}
		else if(place == 3)
		{
			reg = new RegExp(set_value);
		}
		else
		{
			stop();
		}


		rep1 = trip1.match(reg);
		rep2 = trip2.match(reg);
		rep3 = trip3.match(reg);
		rep4 = trip4.match(reg);
		rep5 = trip5.match(reg);
		rep6 = trip6.match(reg);
		rep7 = trip7.match(reg);
		rep8 = trip8.match(reg);
		rep9 = trip9.match(reg);
		rep10 = trip10.match(reg);
		
		if(rep1 != null)
		{
			view_trip += "#"+tripkey1+"	◆"+trip1+"\r\n";
			flag = 1;
		}

		if(rep2 != null)
		{
			view_trip += "#"+tripkey2+"	◆"+trip2+"\r\n";
			flag = 1;
		}

		if(rep3 != null)
		{
			view_trip += "#"+tripkey3+"	◆"+trip3+"\r\n";
			flag = 1;
		}

		if(rep4 != null)
		{
			view_trip += "#"+tripkey4+"	◆"+trip4+"\r\n";
			flag = 1;
		}

		if(rep5 != null)
		{
			view_trip += "#"+tripkey5+"	◆"+trip5+"\r\n";
			flag = 1;
		}
		if(rep6 != null)
		{
			view_trip += "#"+tripkey6+"	◆"+trip6+"\r\n";
			flag = 6;
		}

		if(rep7 != null)
		{
			view_trip += "#"+tripkey7+"	◆"+trip7+"\r\n";
			flag = 7;
		}

		if(rep8 != null)
		{
			view_trip += "#"+tripkey8+"	◆"+trip8+"\r\n";
			flag = 8;
		}

		if(rep9 != null)
		{
			view_trip += "#"+tripkey9+"	◆"+trip9+"\r\n";
			flag = 9;
		}

		if(rep10 != null)
		{
			view_trip += "#"+tripkey10+"	◆"+trip10+"\r\n";
			flag = 10;
		}

		if(flag == 1)
		{
			document.getElementById("result").value = view_trip + document.getElementById("result").value;
			count += 1;
		}

		var search_time_old = new Date();
		var T = search_time_old.getTime()-search_time_now.getTime();
		var H = Math.floor(T/(60*60*1000));
		var T = T-(H*60*60*1000);
		var M = Math.floor(T/(60*1000));
		var T = T-(M*60*1000);
		var S = Math.floor(T/1000);
		var Ms = T%1000;

		return_count = "検索開始から "+H+":"+M+":"+S+":"+Ms+" 秒経ちました。<br>"+n+count+"件ヒットしています";


		document.getElementById("count").innerHTML = return_count;
	}

	function stop()
	{
		clearInterval(timer);
		document.getElementById("start").disabled = false; //髢句ｧ九�繧ｿ繝ｳ繧｢繧ｯ繝�ぅ繝�
		document.getElementById("stop").disabled = true; //蛛懈ｭ｢繝懊ち繝ｳ髱槭い繧ｯ繝�ぅ繝�
		document.getElementById("crear").disabled = false; //蛛懈ｭ｢繝懊ち繝ｳ髱槭い繧ｯ繝�ぅ繝�

		document.getElementById("search").readOnly = false;//讀懃ｴ｢蜈･蜉帙お繝ｪ繧｢繧｢繧ｯ繝�ぅ繝�
		document.getElementById("place").disabled = false;//讀懃ｴ｢譁ｹ豕輔い繧ｯ繝�ぅ繝�
		document.getElementById("str").innerHTML = "<b>現在検索しています</b>";
	}

	function start()
	{
		set_value = document.getElementById("search").value;
		place = document.getElementById("place").value;

		if(set_value == '' || set_value == '検索トリップを入力してください')
		{
			alert('検索トリップを入力してください');
		}
		else
		{
			if((place != 1) && (place != 2) && (place != 3))
			{
				alert('検索トリップを入力してください');
			}
			else
			{
				timer = setInterval("rand_view()",1);
				document.getElementById("start").disabled = true; //髢句ｧ九�繧ｿ繝ｳ髱槭い繧ｯ繝�ぅ繝�
				document.getElementById("stop").disabled = false; //蛛懈ｭ｢繝懊ち繝ｳ繧｢繧ｯ繝�ぅ繝�
				document.getElementById("crear").disabled = true; //蛛懈ｭ｢繝懊ち繝ｳ髱槭い繧ｯ繝�ぅ繝�

				document.getElementById("search").readOnly = true;//讀懃ｴ｢蜈･蜉帙お繝ｪ繧｢髱槭い繧ｯ繝�ぅ繝�
				document.getElementById("place").disabled = true;//讀懃ｴ｢譁ｹ豕暮撼繧｢繧ｯ繝�ぅ繝�
				document.getElementById("str").innerHTML = "<b>現在検索しています</b>";
				search_time_now = new Date();
			}
		}
	}

	function randobet(n,b)
	{
		b = b || '';

		var a = 'abcdefghijklmnopqrstuvwxyz'
		       +'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
		       +'0123456789'
		       + b;

		a = a.split('');
		var s = '';

		for(var i=0; i<n; i++)
		{
			s += a[Math.floor(Math.random() * a.length)];
		}

		return s;
	}

	function del_value()
	{
		var s = document.getElementById("search").value;

		if(s == '検索トリップを入力してください')
		{
			document.getElementById("search").value = "";
			box.className = "search_select_style";
		}
	}
