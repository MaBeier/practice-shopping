var main=document.querySelector('.main');
var checkbox_all=main.querySelector('#checkbox_all');
var checkbox=main.querySelectorAll('#checkbox');
var total_price=main.querySelectorAll('.total_price');
var price=main.querySelectorAll('.price');
var nums=main.querySelectorAll('.nums');
var sub=main.querySelectorAll('.sub');
var add=main.querySelectorAll('.add');
var amount=main.querySelector('.amount');
var length=checkbox.length;
var index=0;
var class_tr=main.querySelectorAll('tr');
var tr=document.querySelectorAll('tr');







//全选
checkbox_all.onclick=function(){
	
	if (checkbox_all.checked==true) {
		
		for(var i=0;i<length;i++){
			checkbox[i].checked=true;
			total_price[i].innerHTML=nums[i].value*price[i].innerHTML;
		}

	}
	
	else{

		for(var i=0;i<length;i++){
			checkbox[i].checked=false;
		}
	}

	var prices=[];
	amount_all(prices);
   	amount.innerHTML=sum(prices);
}



//点击单个商品input

for ( var i=0; i<length; i++) {
        //每个商品点击触发的事件
        (function(j){
            checkbox[j].onclick = function () {

            if ( this.checked == true ) {
               index++;
               total_price[j].innerHTML=nums[j].value*price[j].innerHTML;
                if ( index == length ) {
                    checkbox_all.checked = true;
                }                      
            }

            else {
                index--;
                checkbox_all.checked = false;
                total_price[j].innerHTML=nums[j].value*price[j].innerHTML;
            } 
            
       		var prices=[];
			amount_all(prices);console.log(prices);
			amount.innerHTML=sum(prices);
             }
       } (i))
    }



//加减数量
for(var i=0;i<length;i++){
	(function(j){
		add[j].onclick=function(){
			nums[j].value++;
			total_price[j].innerHTML=nums[j].value*price[j].innerHTML;
			var prices=[];
			amount_all(prices);console.log(prices);
			amount.innerHTML=sum(prices);
	}

		sub[j].onclick=function(){
			if(nums[j].value>1)
				 {
				 	nums[j].value--;
				 	total_price[j].innerHTML=nums[j].value*price[j].innerHTML;
				}

			else {
					nums[j].value=1;
				    total_price[j].innerHTML=nums[j].value*price[j].innerHTML;
				}

			var prices=[];
			amount_all(prices);console.log(prices);
			amount.innerHTML=sum(prices);
		}
		//键盘键入
		nums[j].onkeyup=function(){
			var val = parseInt(this.value);
            if (isNaN(val) || val <= 0) {
                val = 1;
            }
            if (this.value != val) {
                this.value = val;
            }
            total_price[j].innerHTML=nums[j].value*price[j].innerHTML;
			var prices=[];
			amount_all(prices);console.log(prices);
			amount.innerHTML=sum(prices);

		}
		
	}(i))
}


	
//将checked的数据取出来放入新数组
function amount_all(arr){
 	for(var m=0;m<checkbox.length;m++){
		if(checkbox[m].checked==true){
			  arr.push(parseInt(total_price[m].innerHTML));
		}	
    }  
}


//数组求和
function sum(arr) {
 var s=0;
 if(arr.length==0){
     return 0;
 }
    else if(arr.length==1){
        return arr[0];
    }
 else{
     for(var i=0;i<arr.length;i++){
         s+=arr[i];
     }
	return s;
 }
}

//键盘键入
var isNumber=function(keyCode){
      // 数字
      if (keyCode >= 48 && keyCode <= 57) {
        return true;  
      }
        // 小数字键盘
      if (keyCode >= 96 && keyCode <= 105) {
        return true;
      }
        //tab Backspace, del, 左右方向键
      if (keyCode == 9||keyCode == 8|| keyCode == 32 || keyCode == 46 || keyCode == 37 || keyCode == 39) {
        return true;
      }
      return false
    }