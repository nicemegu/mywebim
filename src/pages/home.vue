<template>
  <div class="chatOut">
    <div class="chat">
      <div class="chat-left">
        <div class="chat-news">
          <ul ref="chatContent">
            <li class="msg-left">
              <div class="headPortrait"><img src="../assets/timg.jpg" alt=""></div>
              <div class="information">
                <div class="bickName">Iron Man</div>
                <span class="content">你好，我是Iron Man</span>
              </div>
            </li>
             <li :class="item.sender==1?'msg-right':'msg-left'" v-for="(item,index) in chatList" :key="index">
               <div class="information" v-if="item.sender==1">
                <div class="bickName">{{item.name}}</div>
                <span class="content">{{item.content}}</span>
              </div>
              <div class="headPortrait"><img src="../assets/spanman.jpg" alt=""></div>
               <div class="information" v-if="item.sender==0">
                <div class="bickName">{{item.name}}</div>
                <span class="content">{{item.content}}</span>
              </div>
            </li>
            
          </ul>
        </div>
        <div class="chat-input-box">
          <textarea name="" id="" cols="30" rows="10" autofocus v-model="msg"></textarea>
          <button>取消</button>
          <button @click="send">发送</button>
          <button @click="test">测试接收</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg:'',
      bickName:'Iron Man',
      chatList:[
        {
          name:'Iron Man',
          content:'你好，我是Iron Man',
          sender:1
        }
      ]
    }
  },
  methods: {
    send(){
     if(this.msg){
       this.chatList.push({
         name:'Spider-Man',
         content:this.msg,
         sender:1
       })
       
       
     }else{
       alert('文件不能为空')
     }
     
    },
    test(){
      this.chatList.push({
         name:'Spider-Man',
         content:this.msg,
         sender:0
       })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.chatOut{
  position: relative;
  .chat{
    width: 600px;
    height: 650px;
    margin: 50px auto;
    border: 1px solid #ccc;
    border-radius: 10px;
    overflow: hidden;
    .chat-left{
      width: 500px;
      height: 650px;
       border-right: 1px solid rgb(70, 69, 69);
      .chat-news{
        width: 500px;
        height: 530px;
        border-bottom: 1px solid rgb(63, 63, 63);
        box-sizing: border-box;
        padding: 10px;
        ul{
          height: 500px;
          overflow: auto;
          display: flex;
          flex-direction: column;
          li{
            display: flex;
            margin-top: 15px;
          }
          .msg-left{
            .headPortrait{
              img{
                width: 40px;
                height: 40px;
                border-radius: 50%;
              }
            }
            .information{
              margin-left: 10px;
              .bickName{
                font-size: 14px;
                color: rgb(136, 133, 133);
              }
              .content{
                display: inline-block;
                max-width: 300px;
              }
            }
          }
          .msg-right{
            align-self: flex-end;
            .headPortrait{
              img{
                width: 40px;
                height: 40px;
                border-radius: 50%;
              }
            }
             .information{
              margin-right: 10px;
              .bickName{
                text-align: right;
                font-size: 14px;
                color: rgb(136, 133, 133);
              }
              .content{
                display: inline-block;
                max-width: 300px;
              }
            }
          }
        }
      }
      .chat-input-box{
        width: 500px;
        height: 120px;
        padding: 10px;
        box-sizing: border-box;
        textarea{
          width: 470px;
          height: 70px;
          outline: none;
          border: none;
          resize: none;
        }
        button{
          float: right;
        }
      }
    }
  }
}



</style>
