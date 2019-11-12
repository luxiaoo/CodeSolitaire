//字典树
var str = "";
var str1= "";//备份
var relist = new Array();
var triNode = function(key){
    this.key = key;
    this.son = [];
    this.isWord = false;//用于单词标记
    this.str = "";
}
var tree = function(){
    this.root = new triNode(null);
}
tree.prototype={

    insertData:function(stringData){
        //用于外部调用插入，目的是从根节点开始插入
        this.insert(stringData,this.root)
    },
    insert:function(stringData,node){
        //用于内部自身递归调用，层层判断是否存在或是否要插入
        if(stringData==''){
            //字符串为空，直接返回结束
            return;
        }
        //获取子节点
        var son = this.getSon(node);
        var haveData = null;
        //声明一个变量用来存储字符串第一个字符和子节点相同的节点，方便后续节点递归遍历
        for(var i in son){
            if(son[i].key==stringData[0]){
                haveData = son[i]
            }
        }
        //document.write(haveData)
        if(haveData){
            if(stringData.length==1){
                haveData.isWord = true;
                //document.write("666")
            }
            //havaData存在说明在子节点找到了，然后进行深入节点查找
            this.insert(stringData.substring(1),haveData)
        }else{
            if(son.length==0){
                //如果子节点为空，则直接插入
                var node = new triNode(stringData[0]);
                son.push(node);
                if(stringData.length==1){
                    node.isWord = true;
                }
                //插入完毕后将后续字符串继续插入
                this.insert(stringData.substring(1),node);
            }else{
                var node = new triNode(stringData[0]);
                //将子节点的key进行排序插入，方便后续进行二分法查找，加快查找效率
                var vlPosition = 0;
                for(var j in son){
                    if(son[j].key<stringData[0]){
                        vlPosition++;
                    }
                }
                if(stringData.length==1){
                    node.isWord = true;
                }
                //子节点插入
                son.splice(vlPosition,0,node);
                //插入完毕后将后续字符串继续插入
                this.insert(stringData.substring(1),node);
            }
        }
    },
    preTraverse:function(node,stringData){

        //var son = node;
        var son = this.getSon(node);
        //var str = "";
        if (!node){
            return relist;
        }

        for (var i in son){
            //str += node.key
            str += son[i].key
            if (son[i].isWord){
                relist.push(stringData+str);
                if((son[i].son).length==0){
                    str = str1;
                }

            }
            this.preTraverse(son[i],stringData)

        }

        return relist;
        
    },
    hasPrefix:function(stringData,node){
        if (stringData==""){
            return;
        }
        var flag;
        // var flag=200;//标记子节点数组中的哪个节点
        var son = this.getSon(node);
        for (var i in stringData){
            for (var j in son){
                if (son[j].key == stringData[i]){
                    flag = j;
                    break;
                }
            }
            son = this.getSon(son[flag]);
        }
        if (son!=null){
            for (var k in son){
                str=son[k].key
                str1 = str;
                this.preTraverse(son[k],stringData)
            }
        }
        return relist;
        
    },
    getSon:function(node){
        //获取子节点
        return node.son;
    }
}
var msd = new tree()
//插入数据
 msd.insertData("hello");
 msd.insertData("helo");
 msd.insertData("healo");
 msd.insertData("haslo");
 document.write(msd.hasPrefix("he",msd.root))
//var  s = JSON.toJSONString(msd,true)
//document.write(s)
//前缀数量
//document.write(msd.justContent("he",msd.root))
//msd.justContent("he",msd.root)
 //msd.countBeforeData("ha");