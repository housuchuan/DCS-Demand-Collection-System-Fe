<template>
    <div>
        <!--table-->
        <div class="table">
            <!--新增及批量删除-->
            <div class="el-groups">
                <el-button size="small" type="primary" icon="el-icon-plus" @click="dialogFormVisible = true">新增
                </el-button>
                <div>
                    <el-input prefix-icon="el-icon-search" v-model="search" size="mini" placeholder="输入关键字搜索"/>
                </div>
            </div>
            <el-table
                    ref="multipleTable"
                    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                    style="width: 100%"
                    tooltip-effect="dark">
                <el-table-column label="创建日期" prop="date" sortable></el-table-column>
                <el-table-column label="需求来源" align="center" prop="from"></el-table-column>
                <el-table-column label="需求描述" align="center" prop="desc"></el-table-column>
                <el-table-column label="需求级别" align="center" prop="level"></el-table-column>
                <el-table-column label="需求备注" align="center" prop="extra"></el-table-column>
                <el-table-column label="需求状态" align="center">
                    <template slot-scope="scope">
                        <el-switch active-text="开启" inactive-text="关闭"></el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="dialogFormVisible = true">需求更改</el-button>
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
        <el-dialog width="40%" title="需求新增" :visible.sync="dialogFormVisible">
            <el-form :model="form" :rules="rules" ref="form">
                <el-form-item label="需求来源" :label-width="formLabelWidth" prop="from">
                    <el-select v-model="form.from" placeholder="请选择需求来源">
                        <el-option label="移动开发一部" value="一"></el-option>
                        <el-option label="移动开发二部" value="二"></el-option>
                        <el-option label="移动开发三部" value="三"></el-option>
                        <el-option label="移动开发四部" value="四"></el-option>
                        <el-option label="移动开发五部" value="五"></el-option>
                        <el-option label="移动开发六部" value="六"></el-option>
                        <el-option label="移动开发七部" value="七"></el-option>
                        <el-option label="移动开发八部" value="八"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="需求描述" :label-width="formLabelWidth" prop="desc">
                    <el-input type="textarea" :rows="3" placeholder="请填写需求描述" v-model="form.desc"></el-input>
                </el-form-item>
                <el-form-item label="需求级别" :label-width="formLabelWidth" prop="level">
                    <el-select v-model="form.level" placeholder="请选择需求级别">
                        <el-option label="高" value="2"></el-option>
                        <el-option label="中" value="1"></el-option>
                        <el-option label="低" value="0"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="需求备注" :label-width="formLabelWidth" prop="extra">
                    <el-input v-model="form.extra" type="textarea" :rows="3" placeholder="请填写需求备注"></el-input>
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
                    from: '',
                    desc: '',
                    level: '低',
                    extra: ''
                },
                rules: {
                    from: [
                        {required: true, message: '请选择需求来源', trigger: 'blur'}
                    ],
                    desc: [
                        {required: true, message: '请填写需求描述', trigger: 'blur'}
                    ]
                },
                formLabelWidth: '120px'
            }
        },
        methods: {
            handleDelete(index, row) {
                this.$confirm('此操作将永久删除该需求, 是否继续?', '提示', {
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
