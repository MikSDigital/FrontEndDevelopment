new Vue({el:"#app",data:{inputsVisible:!1,title:"Biedronka",productInput:"",quantityInput:"",priceInput:"",sum:Number,total:0,newItem:{},vat:"8",vatValue:0,date:"",day:"",month:"",year:"",hours:"",minutes:"",seconds:"",receiptId:"",attachRotation:!1,receipts:[],items:[]},methods:{getTime:function(){this.day=(new Date).getDate(),console.log(this.day),this.month=(new Date).getMonth()+1,this.year=(new Date).getFullYear(),this.hours=(new Date).getHours(),this.minutes=(new Date).getMinutes(),this.seconds=(new Date).getSeconds(),this.date=this.day+"-"+this.month+"-"+this.year+" "+this.hours+":"+this.minutes+":"+this.seconds},showReceiptTime:function(){this.inputsVisible?(this.receiptId=Math.floor(999*Math.random()+1),this.getTime()):(this.receiptId="",this.date="")},storeProductInput:function(t){this.productInput=t.target.value},storeQuantityInput:function(t){this.quantityInput=t.target.value},storePriceInput:function(t){this.priceInput=t.target.value},addNewItem:function(){this.sum=Number(this.quantityInput)*Number(this.priceInput),this.sum=this.sum.toFixed(2),console.log(this.sum),this.items.push({product:this.productInput,quantity:this.quantityInput,price:this.priceInput,vat:this.vat+"%",sum:this.sum}),this.productInput="",this.quantityInput="",this.priceInput="",this.total+=Number(this.items[this.items.length-1].sum),this.total=this.total.toFixed(2),this.vatValue=this.vat/100*this.total,this.vatValue=this.vatValue.toFixed(2)},cancelLastItem:function(){this.items.pop()}},computed:{fabRotation:function(){return{fabRotate:this.attachRotation}}}}),console.log((new Date).getMinutes());