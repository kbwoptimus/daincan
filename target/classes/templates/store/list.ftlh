<html>
<#include "../zujian/top.ftlh">
<body>
<div id="wrapper" class="toggled">
    <#--内容区域头部样式-->
    <h2 class="bg-info text-white p-3  text-center">商店管理</h2>
    <#--左边栏-->
    <#include "../zujian/left.ftlh">
    <#--主要内容content-->
    <div id="page-content-wrapper" class="container">
        <#--添加商店-->
        <button class="btn btn-warning text-white my-3" onclick="window.parent.location.href='/diancan/store/detail';">
            添加单个商店
        </button>


        <div class="row clearfix">
            <div class="col-md-12 column">
                <table class="table table-bordered ">
                    <thead>
                    <tr class="table-info">
                        <th>商店Id</th>
                        <th>名字</th>
                        <th>商店图片</th>
                        <th>联系电话</th>
                        <th>商店地址</th>

                        <th>修改时间</th>
                        <th colspan="2">操作</th>
                    </tr>
                    </thead>
                    <tbody>
                    <#list storeList as store>
                        <tr>
                            <td>${store.stid}</td>
                            <td>${store.stname}</td>
                            <td><img height="50" width="50" src="${store.stimg}" alt=""></td>
                            <td>${store.stphone}</td>
                            <td>${store.staddress}</td>

                            <td>${store.updateTime}</td>
                            <td><a href="/diancan/store/detail?stid=${store.stid}">修改</a>
                            <td><a href="/diancan/store/remove?stid=${store.stid}">删除</a>
                            </td>
                        </tr>
                    </#list>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>


</body>
</html>