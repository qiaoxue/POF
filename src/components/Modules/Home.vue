<template>
  <div class="home">
    <div class="currentData">
      <el-row>
        <el-col :span="8" class="pr35">
          <ps-panel title="企业影响力" show=true>
            <div class="cur-tip clearfix">
              <p class="cur-data color00C">402,25</p>
              <p class="cur-target">
                <span class="num">+39</span>
                <span ng-if="isGreen" class="green">↑</span>
                <!--<span ng-if="!isGreen" class="red">↓</span>-->
              </p>
            </div>
          </ps-panel>
        </el-col>
        <el-col :span="8" class="pr35 pl35">
          <ps-panel title="企业影响力" show=true>
            <div class="cur-tip clearfix">
              <p class="cur-data color00C">402,25</p>
              <p class="cur-target">
                <span class="num">+39</span>
                <span ng-if="isGreen" class="green">↑</span>
                <!--<span ng-if="!isGreen" class="red">↓</span>-->
              </p>
            </div>
          </ps-panel>
        </el-col>
        <el-col :span="8" class="pl35">
          <ps-panel title="企业影响力" show=true>
            <div class="cur-tip clearfix">
              <p class="cur-data color00C">402,25</p>
              <p class="cur-target">
                <span class="num">+39</span>
                <span ng-if="isGreen" class="green">↑</span>
                <!--<span ng-if="!isGreen" class="red">↓</span>-->
              </p>
            </div>
          </ps-panel>
        </el-col>
      </el-row>
    </div>
    <div class="influence">
      <ps-panel title="影响力导向" show="true">
        <ps-table :page="page" :pageFalse="true" @sendPageSize="changePageSize" @sendPageIndex="changePageSize">
          <template slot>
            <el-table-column label="操作" fixed="right" width="150px">
              <template scope="scope">
                <el-button
                  size="small"
                  @click="handleEdit(scope.$index, scope.row)">编辑
                </el-button>
                <el-button
                  size="small"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)">删除
                </el-button>
              </template>
            </el-table-column>
          </template>
        </ps-table>
      </ps-panel>
    </div>
  </div>
</template>

<script>
  import {psPanel, psTable} from 'components/Common'
  import {fetch} from 'config/request'
  import Page from 'utils/Page'
  const ERR_OK = 0
  export default{
    data () {
      return {
        isGreen: true,
        page: new Page()
      }
    },
    created () {
      this.getTableData()
    },
    methods: {
      getTableData () {
        fetch('/api/tableData').then((res) => {
          if (res.data.errno === ERR_OK) {
            this.page.setPageData(res.data.data)
          }
        })
      },
      changePageSize ({pageSize, pageIndex}) {
        this.getTableData()
      }
    },
    components: {
      psPanel,
      psTable
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .home {
    .pr35 {
      padding-right: 35px !important;
    }
    .pl35 {
      padding-left: 35px;
    }
    .currentData {
      .cur-tip {
        width: 100%;
        .cur-data {
          float: left;
          font-size: 52px;
          font-weight: 600;
        }
        .cur-target {
          width: 73px;
          height: 37px;
          line-height: 40px;
          float: right;
          background: #27333a;
          margin-top: 8px;
          span {
            display: inline-block;
            line-height: 37px;
            float: left;
            font-weight: 600;
          }
          .num {
            padding: 0 10px;
            font-size: 16px;
          }
          .green {
            float: right;
            width: 20px;
            background: #46A05A;
            text-align: center;
            font-size: 25px;
          }
          .red {
            float: right;
            width: 20px;
            background: red;
            text-align: center;
            font-size: 25px;
          }
        }
      }
      .isRed {

      }
    }
    .influence {
      margin-top: 30px;
    }
  }
</style>
