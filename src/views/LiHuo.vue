<template language='html'>
  <div class="lihuo">
    <div class="header">
      <h1>富润德供应链管理有限公司</h1>
      <h2>理货单</h2>
      <img class="onecode" src="http://192.168.2.70:8080/logo.png" alt="">
      <img class="qrcode" src="http://192.168.2.70:8080/logo.png" alt="">
    </div>
    <ul class="main-info clear">
      <li>
        <span>仓库名称：</span>
        <span>深圳仓</span>
      </li>
      <li>
        <span>客户名称：</span>
        <span>深圳仓</span>
      </li>
      <li>
        <span>司机/电话：</span>
        <span>深圳仓</span>
      </li>
      <li>
        <span>入库单号：</span>
        <span>深圳仓</span>
      </li>
      <li>
        <span>送货车牌号：</span>
        <span>深圳仓</span>
      </li>
      <li>
        <span>入库时间：</span>
        <span>深圳仓</span>
      </li>
    </ul>
    <table class="table" border="1" cellpadding="0" cellspacing="0">
      <thead>
        <tr>
          <th>序号</th>
          <th>板号</th>
          <th>料号</th>
          <th>品名</th>
          <th>规格型号</th>
          <th>数量</th>
          <th>单位</th>
          <th>箱数</th>
          <th>毛重</th>
          <th>体积</th>
          <th>储位</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>dafasdfasdfasdfasd</td>
          <td>asdfasdfafdas是打发斯蒂芬dfasdf</td>
          <td>dafasdfasdfasdfasd</td>
          <td>asdfasdfafdasdfasdf</td>
          <td>阿斯蒂芬沙发沙发撒旦法阿斯蒂芬按时</td>
          <td>asdfasdfafdasdfasdf</td>
          <td>dafasdfasdf的发生的发生asdfasd</td>
          <td>asdfasdfafdasdfasdf</td>
          <td>dafasdfasdfasdfasd</td>
          <td>asdfasdfafdasdfasdf</td>
          <td>dafasdfasdfasdfasd</td>
        </tr>
        <tr>
          <td>dafasdfasdfasdfasd</td>
          <td>asdfasdfafdas是打发斯蒂芬dfasdf</td>
          <td>dafasdfasdfasdfasd</td>
          <td>asdfasdfafdasdfasdf</td>
          <td>阿斯蒂芬沙发沙发撒旦法阿斯蒂芬按时</td>
          <td>asdfasdfafdasdfasdf</td>
          <td>dafasdfasdf的发生的发生asdfasd</td>
          <td>asdfasdfafdasdfasdf</td>
          <td>dafasdfasdfasdfasd</td>
          <td>asdfasdfafdasdfasdf</td>
          <td>dafasdfasdfasdfasd</td>
        </tr>
      </tbody>
    </table>
    <div class="footer">
      <h4>实物验收货损差或其他记录：</h4>
      <div class="recordbox"></div>
      <h4>声明</h4>
      <h4>1.本签收单一式二份，仓库留存一份，交送货人一份。</h4>
      <p>
        <span>收货人(签字)：</span>
        <span></span>
        <span>送货人(签字)：</span>
      </p>
      <p>
        <span>日期：</span>
        <span></span>
        <span>日期：</span>
      </p>
      <p>
        <span></span>
        <span>打印时间：</span>
        <span>制单人：</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lihuo'
}
</script>

<style>
.clear:after{
  content: '';
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
  font-size: 0;
}
.clear{
  zoom: 1;
}

html, body {
  margin: 0;
  padding: 0;
}
h1, h2, h3, h4, h5, h6, ul, ol, p {
  margin: 0;
  padding: 0;
}
ul, ol {
  list-style: none;
}

html, body{
  width: 100%;
}
.lihuo{
  width: 100%;
}
.lihuo .header {
  text-align: center;
  position: relative;
}
.lihuo .onecode{
  width: 400px;
  height: 50px;
  background-color: #aaa;
}
.lihuo .qrcode {
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: #aaa;
  right: 20px;
  top: 50%;
  margin-top: -50px;
}

.lihuo .main-info{
  margin-top: 20px;
}
.lihuo .main-info li{
  float: left;
  width: 33%;
}
.lihuo .main-info li span:first-child{
  margin-right: 10px;
}

.lihuo .table{
  width: 100%;
  margin-top: 20px;
  table-layout:fixed;
}
.lihuo .table tbody td {
  word-wrap: break-word;
  white-space: wrap;
}

.lihuo .footer{
  margin-top: 20px;
}
.lihuo .footer h4{
  margin-bottom: 5px;
}
.lihuo .footer p{
  margin-bottom: 5px;
}
.lihuo .footer p span{
  display: inline-block;
  width: 33%;
}
.lihuo .footer .recordbox{
  margin: 0 10px 5px;
  border: 1px solid #333;
  height: 200px;
}
</style>
