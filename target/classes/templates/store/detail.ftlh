<html>

<#include "../zujian/top.ftlh">
<body>
<div id="wrapper" class="toggled">
    <#--内容区域头部样式-->
    <h2 class="bg-info text-white p-3  text-center">添加商店</h2>
    <#--左边栏-->
    <#include "../zujian/left.ftlh">
    <#--主要内容content-->
    <div id="page-content-wrapper" class="container">
        <div class="row clearfix">
            <div class="col-md-12 column">
                <form role="form" method="post" action="/diancan/store/save">
                    <div class="form-group">
                        <label>商店名</label>
                        <input name="stname" type="text" class="form-control"
                               value="${(store.stname)!''}"/>
                    </div>
                    <div>
                        <label>商店id</label>
                        <input name="stid" type="text" class="form-control"
                               value="${(store.stid)!''}"/>
                    </div>
                    <div class="form-group">
                        <label>联系电话</label>
                        <input name="stphone" type="text" class="form-control"
                               value="${(store.stphone)!''}"/>
                    </div>
                    <div class="form-group">
                        <label>商店地址</label>
                        <input name="staddress" type="text" class="form-control"
                               value="${(store.staddress)!''}"/>
                    </div>
                    <div class="form-group">
                        <label>图片(必填)</label>
                        <img height="100" width="100" src="${(store.stimg)!''}" alt="">
                        <input name="stimg" type="text" class="form-control"
                               value="${(store.stimg)!''}"/>
                    </div>

                    <button type="submit" class="btn  btn-info">提交</button>
                </form>
            </div>
        </div>
    </div>

</div>

</body>
</html>