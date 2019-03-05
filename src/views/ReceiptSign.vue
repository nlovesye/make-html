<template language='html'>
  <div class="receipt-sign">
    <div class="header">
      <h3>富润德供应链管理有限公司</h3>
      <h4 class="mt">收货签收单</h4>
      <img src="http://192.168.2.70:8080/logo.png" alt="" class="onecode mt">
      <img src="http://192.168.2.70:8080/logo.png" alt="" class="qrcode">
    </div>
    <table class="main-info mt">
      <tbody>
        <tr>
          <td>
            <span>仓库名称：</span>
            <span>深圳仓</span>
          </td>
          <td>
            <span>客户名称：</span>
            <span>深圳仓</span>
          </td>
          <td>
            <span>司机/电话：</span>
            <span>深圳仓</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>入库单号：</span>
            <span>深圳仓</span>
          </td>
          <td>
            <span>送货车牌号：</span>
            <span>深圳仓</span>
          </td>
          <td>
            <span>入库时间：</span>
            <span>深圳仓</span>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="table mt" border="1" cellpadding="0" cellspacing="0">
      <thead>
        <tr>
          <th>序号</th>
          <th>料号</th>
          <th>品名</th>
          <th>规格型号</th>
          <th>数量</th>
          <th>单位</th>
          <th>箱数</th>
          <th>毛重</th>
          <th>体积</th>
          <th>备注</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>asdfasdfafdas是打发斯蒂芬dfasdf</td>
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
          <td>2</td>
          <td>asdfasdfafdas是打发斯蒂芬dfasdf</td>
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
    <h4 class="mt">实物验收货损差或其他记录：</h4>
    <table class="recordbox mt" border="1" cellpadding="0" cellspacing="0"></table>
    <h4 class="mt">声明</h4>
    <h4 class="mt">1.本签收单一式二份，仓库留存一份，交送货人一份。</h4>
    <ul class="footer mt clear">
      <li>收货人(签字)：</li>
      <li></li>
      <li>送货人(签字)：</li>
      <li>日期：</li>
      <li></li>
      <li>日期：</li>
      <li></li>
      <li>打印时间：</li>
      <li>制单人：</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ReceiptSign'
}
</script>

<style>
.clear:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
  font-size: 0;
}
.clear {
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
.receipt-sign{
  width: 100%;
}
.receipt-sign .mt{
  margin-top: 10px;
}

.receipt-sign .header{
  text-align: center;
  position: relative;
}
.receipt-sign .header .qrcode {
  position: absolute;
  right: 10px;
  top: 50%;
  margin-top: -40px;
  width: 80px;
  height: 80px;
  display: inline-block;
  background-color: #aaa;
}
.receipt-sign .header .onecode {
  width: 360px;
  height: 40px;
  display: inline-block;
  background-color: #aaa;
}

.receipt-sign table.main-info{
  width: 100%;
}

.receipt-sign .table{
  width: 100%;
  table-layout:fixed;
}
.receipt-sign .table tbody td {
  word-wrap: break-word;
  white-space: wrap;
}

.receipt-sign table.recordbox{
  width: 100%;
  height: 200px;
  table-layout:fixed;
}

.receipt-sign .footer li{
  width: 33%;
  float: left;
  height: 30px;
  line-height: 30px;
}
</style>
