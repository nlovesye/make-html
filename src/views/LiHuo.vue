<template language='html'>
  <div class="lihuo">
    <table class="header">
        <tbody>
            <tr>
                <td colspan="2" width="100"></td>
                <td colspan="8">
                  <h1>富润德供应链管理有限公司</h1>
                </td>
                <td rowspan="3" colspan="2" width="100" height="100">
                  <img class="qrcode" width="100" height="100" src="http://192.168.2.70:8080/logo.png" alt="" />
                </td>
            </tr>
            <tr>
                <td colspan="2" width="100"></td>
                <td colspan="8">
                  <h2>理货单</h2>
                </td>
            </tr>
            <tr>
                <td colspan="2" width="100"></td>
                <td colspan="8" width="360" height="40">
                  <img class="onecode" width="360" height="40" src="http://192.168.2.70:8080/logo.png" alt="" />
                </td>
            </tr>
        </tbody>
    </table>
    <table class="main-info">
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
    <h4>实物验收货损差或其他记录：</h4>
    <table class="recordbox" border="1" cellpadding="0" cellspacing="0">
      <tbody>
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>
    <h4>声明</h4>
    <h4>1.本签收单一式二份，仓库留存一份，交送货人一份。</h4>
    <table class="sign">
      <tbody>
        <tr>
          <td>收货人(签字)：</td>
          <td></td>
          <td>送货人(签字)：</td>
        </tr>
        <tr>
          <td>日期：</td>
          <td></td>
          <td>日期：</td>
        </tr>
        <tr>
          <td></td>
          <td>打印时间：</td>
          <td>制单人：</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'lihuo'
}
</script>

<style>
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
.lihuo h4{
  margin-top: 10px;
}

.lihuo table.header{
  width: 100%;
  table-layout:fixed;
  text-align: center;
}
/* .lihuo table.header .qrcode {
  width: 120px;
  height: 120px;
  display: inline-block;
} */
/* .lihuo table.header .onecode {
  width: 360px;
  height: 50px;
  display: inline-block;
} */

.lihuo table.main-info{
  margin-top: 20px;
  width: 100%;
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

.lihuo table.recordbox{
  width: 100%;
  height: 200px;
  margin-top: 10px;
  table-layout:fixed;
}
.lihuo table.sign{
  width: 100%;
  margin-top: 10px;
}

</style>
