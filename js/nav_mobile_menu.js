	var chbox;
	chbox=document.getElementById('menu_toggle');
	function Check() 
	{
		if (!chbox) 
		{
			$('body').css('overflow', 'hidden');
			chbox = true;
		}
		else 
		{
			$('body').css('overflow', 'auto');
			chbox = false;
		}
	};