<template>
    <div>
        <!--table-->
        <div class="table">
            <!--新增及批量删除-->
            <div class="el-groups">
                <el-button size="small" type="primary" icon="el-icon-plus" @click="dialogFormVisible = true">新增
                </el-button>
                <!--<div class="more">-->
                <!--<span class="edit"><i class="el-icon-d-arrow-left"></i>取消</span>-->
                <!--<span class="line">|</span>-->
                <!--<span class="edit"><i class="el-icon-delete"></i>删除</span>-->
                <!--</div>-->
                <div>
                    <el-input prefix-icon="el-icon-search" v-model="search" size="mini" placeholder="输入关键字搜索"/>
                </div>
            </div>
            <el-table
                    ref="multipleTable"
                    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                    style="width: 100%"
                    tooltip-effect="dark"
                    @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column label="创建日期" prop="date" sortable></el-table-column>
                <el-table-column label="手机号" align="center" prop="name"></el-table-column>
                <el-table-column label="是否授权管理员" align="center" prop="ability">
                    <template slot-scope="scope">
                        <el-checkbox></el-checkbox>
                    </template>
                </el-table-column>
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">密码更改</el-button>
                        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination
                        background
                        layout="prev, pager, next"
                        :total="1000">
                </el-pagination>
            </div>
        </div>
        <!--新增用户-->
        <el-dialog width="40%" title="用户新增" :visible.sync="dialogFormVisible">
            <el-form :model="form" :rules="rules" ref="form">
                <el-form-item label="手机号" :label-width="formLabelWidth" prop="phone">
                    <el-input v-model="form.phone" autocomplete="off" placeholder="手机号"></el-input>
                </el-form-item>
                <el-form-item label="密码" :label-width="formLabelWidth" prop="password">
                    <el-input v-model="form.password" autocomplete="off" type="password" placeholder="密码"></el-input>
                </el-form-item>
                <el-form-item label="是否是管理员" :label-width="formLabelWidth">
                    <el-select v-model="form.isManager" placeholder="请选择">
                        <el-option label="是" value="1"></el-option>
                        <el-option label="否" value="0"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="submitForm('form')">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }],
                search: '',
                dialogFormVisible: false,
                form: {
                    phone: '',
                    password: '',
                    isManager: '否'
                },
                rules: {
                    phone: [
                        {required: true, message: '请填写手机号', trigger: 'blur'},
                        {pattern: /^[1][3,4,5,7,8,9][0-9]{9}$/, message: '手机号不合法', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请填写密码', trigger: 'blur'}
                    ]
                },
                formLabelWidth: '120px'
            }
        },
        methods: {
            handleEdit(index, row) {
                this.$prompt('', '  新密码', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    inputValidator(val) {
                        if (!val) {
                            return '请输入密码'
                        } else if (!/^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/.exec(val)) {
                            return '密码强度过低，请重新输入'
                        }
                    },
                    inputType: "password"
                }).then(({value}) => {
                    this.$message({
                        type: 'success',
                        message: '你的邮箱是: ' + value
                    });
                }).catch(() => {
                })
            },
            handleDelete(index, row) {
                this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                })
            },
            handleSelectionChange(val) {
                console.log(val)
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.dialogFormVisible = false
                    } else {
                        return false;
                    }
                })
            }
        }
    }
</script>

<style lang="less" scoped>

    .table {
        background-color: #fff;
    }

    .el-groups {
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #EBEEF5;
    }

    .more {
        white-space: nowrap;

        .edit {
            color: rgba(0, 0, 0, .65);
            cursor: pointer;

            i {
                margin-right: 10px;
            }

            &:hover {
                opacity: .8;
            }
        }

        .line {
            margin: 0px 20px;
            line-height: 1.5;
            color: #e8e8e8;
        }
    }

    .pagination {
        padding: 38px 0px;
        text-align: right;
    }
</style>
