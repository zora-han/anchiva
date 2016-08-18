/**
 * Created by Secret on 2016/8/16.
 */
var session=new Vue({
    el:"#session",
    data:{
        sessionData:[       /*当前页中的数据*/
            {id:0,interface:"eth0",IP:"192.168.1.1",state:"UP",mode:"路由",TxPacket:"2，113",ErrorPacket:55,RxPacket:"5，122",Error:44},
            {id:1,interface:"eth1",IP:"172.2.1.11",state:"DOWN",mode:"透明",TxPacket:"4，221",ErrorPacket:37,RxPacket:"6，23",Error:12}
        ],
        pageCount:5,		/*总页数*/
        curPage:1,		/*当前页号*/
        pageSize:8,		/*每页的记录数*/
        dataSize:8      /*每个数据的信息数*/
    }
});