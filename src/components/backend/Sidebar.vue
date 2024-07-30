<script setup>

</script>

<template>
   <div id="app-sidebar">
        <div class="aside-head">
            <div class="box-logo">
                <img src="@/assets/backend/img/avatar.png" alt="">
                <div class="name">Trần Tấn Vũ <p>Email: tranvu.qt74@gmail.com</p></div>
            </div>
            <div class="pos">Quản trị viên</div>
        </div>
        <div class="aside-body">
            <h3>main</h3>
            <ul>
                <li>
                    <div class="box-item">
                        <div class="box-text">
                            <i class="fa fa-home"></i>
                            <a href="#">Trang chủ</a>
                        </div>
                        <div class="box-icon">
                            <i class="fa fa-angle-right"></i>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
   </div>
   <div id="app-dashboard">
        sss
   </div>
</template>

<style>
    .main-dashboard{
        display: flex;
        align-items: flex-start;
        gap: 50px;
        #app-sidebar{
            width: 20%;
            background: #852fb3;
            min-height: 100vh;
            padding: 60px 40px;
            .aside-head{
                .box-logo{
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    margin-bottom: 15px;
                    img{
                        width: 70px;
                        height: 70px;
                        border-radius: 50%;
                        object-fit: cover;
                    }
                    .name{
                        font-size: 16px;
                        font-weight: 500;
                        color: #fff;
                        p{
                            margin-top: 10px;
                            color: #f3f3f3;
                            font-size: 14px;
                            font-weight: 400;
                            margin-bottom: 0;
                        }
                    }
                }
                .pos{
                    font-size: 16px;
                    text-transform: uppercase;
                    color: #fff;
                    font-weight: 500;
                    margin-bottom: 30px;
                }
            }
            .aside-body{
                h3{
                    font-size: 12px;
                    font-weight: 400;
                    color: #e1e1e1;
                    margin-bottom: 10px;
                    text-transform: uppercase;
                }
                ul{
                    margin: 0;
                    padding: 0;
                    li{
                        .box-item{
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            padding: 15px 20px;
                            background: #6b278f;
                            border-radius: 5px;
                            .box-text{
                                a{
                                    color: #e1e1e1;
                                    font-size: 15px;
                                    &:hover{
                                        text-decoration: none;
                                    }
                                }
                                i{
                                    color: #e1e1e1;
                                    margin-right: 5px;
                                }
                            }
                            .box-icon{
                                i{
                                    color: #e1e1e1;
                                }
                            }
                        }
                    }
                }
            }
        }
        #app-dashboard{
            width: 80%;
        }
    }
</style>