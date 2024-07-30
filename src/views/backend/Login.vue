<template>
    <div class="login-container">
        <div class="uk-container">
            <div class="login-content uk-align-center">
                <h2>Đăng nhập</h2>
                <p class="sub">Chào mừng bạn đến với hệ thống <span>Vue system</span></p>
                <div class="panel-body">
                    <div class="form-row">
                        <div class="label">Tên đăng nhập</div>
                        <input 
                            type="text" 
                            name="email" 
                            autocomplete="off" 
                            class="input-text"
                        />
                    </div>
                    <div class="form-row">
                        <div class="label">
                            <div class="uk-flex uk-flex-between">
                                <span>Mật khẩu</span>
                                <a href="">Quên mật khẩu</a>
                            </div>
                        </div>
                        <div class="uk-form-controls">
                            <input 
                            type="password" 
                            name="password" 
                            autocomplete="off" 
                            class="input-password"
                            id="input-password"
                        />
                        </div>
                    </div>
                    <div class="form-row">
                        <input 
                            type="checkbox" 
                            name="savepass" 
                            id="savepass"
                            class="savepass"
                        />
                        <label for="savepass">Ghi nhớ mật khẩu?</label>
                    </div>
                    <div class="form-row">
                        <button class="uk-button btn-login">Đăng nhập</button>
                    </div>
                </div>
                <div class="panel-foot">
                    <p>copyright by tranvu.qt74@gmail.com</p>
                </div> 
            </div>
        </div>
    </div>
  </template>
  
  <style>
    .login-container{
       
        height: 100vh;
        padding-top: 100px;
        .login-content{
            max-width: 400px;
            margin: 0 auto;
            padding: 50px;
            background: #ffffff;
            border-radius: 10px;
            -webkit-box-shadow: 0px 5px 10px 0px rgba(205,205,205,0.5);
            -moz-box-shadow: 0px 5px 10px 0px rgba(205,205,205,0.5);
            box-shadow: 0px 5px 10px 0px rgba(205,205,205,0.5);
            h2{
                font-size: 30px;
                line-height: 36px;
                font-weight: 700;
                text-transform: uppercase;
                color: #000000;
                text-align: center;
            }
            .sub{
                font-size: 14px;
                text-align: center;
                span{
                    display: block;
                    font-weight: 700;
                    font-size: 20px;
                    color: #852fb3;
                    text-transform: uppercase;
                    margin-top: 10px;
                }
            }
            .panel-body{
                .form-row{
                    margin-bottom: 20px;
                    .label{
                        font-weight: 500;
                        font-size: 14px;
                        color: #000;
                        margin-bottom: 10px;
                        a{
                            color: #ff0033;
                            &:hover{
                                text-decoration: none;
                            }
                        }
                    }
                    input{
                        width: 100%;
                        height: 40px;
                        border-radius: 5px;
                        border: 1px solid #999999;
                        padding-left: 10px;
                        &.savepass{
                            width: 15px;
                            height: auto;
                            margin-right: 10px;
                            padding-left: 0;
                            &:focus,&:focus-visible{
                                border: 0px solid #999999;
                                outline: 0px solid #111;
                            }
                        }
                        &:focus,&:focus-visible{
                            border: 0px solid #999999;
                            outline: 1px solid #111;
                        }
                        &:visited{
                            border: 1px solid #999999;
                            outline: 1px solid #111;
                        }
                    }
                    button{
                        width: 100%;
                        background: #852fb3;
                        text-align: center;
                        text-transform: uppercase;
                        color: #ffffff;
                        border-radius: 5px;
                        transition: .3s all ease;
                        &:hover{
                            transition: .3s all ease;
                            transform: translateY(-3px);
                        }
                    }
                }
            }
            .panel-foot{
                p{
                    text-align: center;
                    margin-bottom: 0px;
                    color: #999999;
                }
            }
        }
    }
  </style>
  