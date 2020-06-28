<template>
    <div class="container">
        <img class="log" :src="log" alt="DCS">
        <div class="loginBox">
            <h4 class="title">密码登录</h4>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="elForm">
                <el-form-item label-width="0" prop="name">
                    <el-input v-model="ruleForm.name" placeholder="手机号"></el-input>
                </el-form-item>
                <el-form-item label-width="0" prop="password">
                    <el-input type="password" v-model="ruleForm.password" placeholder="密码"
                              autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label-width="0">
                    <el-button class="elLogin" type="primary" size="medium" @click="submitForm('ruleForm')">登录
                    </el-button>
                </el-form-item>
            </el-form>
            <div class="Login-socialLogin">
                <span>社交帐号登录</span>
                <div class="Login-socialButtonGroup">
                    <span class="Login-socialButton">
                        <svg class="login-icon" fill="#50c8fd" viewBox="0 0 24 24" width="20"
                             height="20">
                            <path d="M12.003 2c-2.265 0-6.29 1.364-6.29 7.325v1.195S3.55 14.96 3.55 17.474c0 .665.17 1.025.281 1.025.114 0 .902-.484 1.748-2.072 0 0-.18 2.197 1.904 3.967 0 0-1.77.495-1.77 1.182 0 .686 4.078.43 6.29 0 2.239.425 6.287.687 6.287 0 0-.688-1.768-1.182-1.768-1.182 2.085-1.77 1.905-3.967 1.905-3.967.845 1.588 1.634 2.072 1.746 2.072.111 0 .283-.36.283-1.025 0-2.514-2.166-6.954-2.166-6.954V9.325C18.29 3.364 14.268 2 12.003 2z"
                                  fill-rule="evenodd">
                            </path>
                        </svg>
                        <span>QQ</span>
                    </span>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="foot-line">
                <span>© 2020 DCS · </span>
                <a href="javascripr:;">京 ICP 证 110745 号 · </a>
                <a href="javascripr:;">京 ICP 备 13052560 号 - 1 · </a>
                <a href="javascripr:;">京公网安备 11010802010035号 · </a>
                <a href="javascripr:;">出版物经营许可证</a>
            </div>
            <div class="foot-line">
                <a href="javascripr:;">侵权举报 · </a>
                <a href="javascripr:;">网上有害信息举报专区 · </a>
                <a href="javascripr:;">儿童色情信息举报专区 · </a>
                <a href="javascripr:;">违法和不良信息举报：17768799843</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                log: require("@/assets/images/img_webLog.png"),
                ruleForm: {
                    name: ''
                },
                rules: {
                    name: [
                        {required: true, message: '请填写手机号', trigger: 'blur'},
                        {pattern: /^[1][3,4,5,7,8,9][0-9]{9}$/, message: '手机号不合法', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请填写密码', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$router.push({
                            name: 'demands'
                        })
                    } else {
                        return false;
                    }
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 100vh;
        background: #b8e5f8 url("../assets/images/img_background.png") no-repeat left top;
        background-size: cover;
    }

    .log {
        margin: 50px 0px 24px 0px;
        width: 128px;
        height: 81px;
        height: auto;
    }

    .loginBox {
        width: 400px;
        padding: 0px 24px 30px;
        box-sizing: border-box;
        box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
        background-color: #fff;
        -webkit-border-radius: 2px;
        -moz-border-radius: 2px;
        border-radius: 2px;
    }

    .title {
        display: inline-block;
        position: relative;
        line-height: 60px;
        margin: 0px 24px 24px 0px;
        font-size: 16px;
        color: #1a1a1a;
        font-weight: 600;
    }

    .title:after {
        display: block;
        position: absolute;
        bottom: 0;
        content: "";
        width: 100%;
        height: 3px;
        background-color: #0084ff;
    }

    .elForm {
        /deep/ .el-input__inner {
            padding-left: 0px;
            border-top: none;
            border-right: none;
            border-left: none;
            border-radius: 0px;
        }

        /deep/ .elLogin {
            margin: 30px 0px 0px;
            width: 100%;
            background-color: #0084ff;
            border-color: #0084ff;

            &:hover {
                background-color: #0077e6;
                border-color: #0077e6;
            }
        }
    }

    .Login-socialLogin {
        display: flex;
        justify-content: space-between;
        align-items: center;
        line-height: 60px;
        font-size: 14px;
        color: #8590a6;

        .login-icon {
            margin-right: 6px;
        }

        .Login-socialButton {
            margin-left: 22px;
            display: flex;
            align-items: center;
            cursor: pointer;

            &:hover {
                color: #76839b;
            }
        }
    }

    .footer {
        padding-bottom: 20px;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        font-size: 12px;
        color: #fff;
        text-shadow: 0 1px 2px #999;

        .foot-line {
            line-height: 21px;
        }

        a {
            color: #fff;

            &:hover {
                text-decoration: underline;
            }
        }
    }

</style>
