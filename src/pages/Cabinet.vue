<template>
  <div class="main-div">
    <div class="form ki_form">
      <h3
        style='color:rgb(94 94 94);    font-family: "Helvetica Neue","Segoe UI",helvetica,verdana,sans-serif;'
      >
        Получение информации
      </h3>
      <hr style="border: 1px solid #f5f5f5;" />
      <div class="dx-fieldset">
        <div class="dx-field">
          <div class="dx-field-label">ФИО:</div>
          <div class="dx-field-value">
            <DxTextBox
              v-model="name"
              :value="name"
              :show-clear-button="true"
              :hover-state-enabled="false"
              placeholder="Введите ФИО для запроса"
            >
              <DxValidator>
                <DxRequiredRule message="Поле обязательно для заполнения" />
              </DxValidator>
            </DxTextBox>
          </div>
        </div>
      </div>
      <div class="dx-fieldset">
        <DxValidationSummary id="summary" />
        <DxButton
          id="button"
          :use-submit-behavior="true"
          text="Получить информацию"
          type="success"
          @click="handleSubmit($event)"
        />
      </div>
    </div>

    <DxDataGrid
      :height="500"
      ref="gridInfo"
      :data-source="store.historyQueries"
      :row-alternation-enabled="true"
      :show-borders="true"
      :focused-row-enabled="true"
      style="margin: 5%"
      @rowDblClick="openPopUp($event)"
    >
      <DxColumn data-field="fio" caption="ФИО" data-type="string" />
      <DxColumn data-field="region" caption="Регион" data-type="string" />
      <DxColumn data-field="status" caption="Статус" data-type="string" />
      <DxSorting mode="multiple" />
    </DxDataGrid>
    <ModalGrid />
    <DxToast :visible="isVisible" :message="message" :type="type" />
  </div>
</template>
<script>
import store from "../store";
import ModalGrid from "../components/ModalGrid.vue";

import DataSource from "devextreme/data/data_source";
import { DxToast } from "devextreme-vue/toast";
import {
  DxDataGrid,
  DxColumn,
  DxSorting,
  DxSearchPanel
} from "devextreme-vue/data-grid";
import DxTextBox from "devextreme-vue/text-box";
import DxButton from "devextreme-vue/button";
import DxValidationSummary from "devextreme-vue/validation-summary";
import {
  DxValidator,
  DxRequiredRule,
  DxCompareRule,
  DxPatternRule,
  DxStringLengthRule,
  DxRangeRule,
  DxAsyncRule
} from "devextreme-vue/validator";

export default {
  components: {
    DxTextBox,
    DxValidator,
    DxRequiredRule,
    DxCompareRule,
    DxPatternRule,
    DxStringLengthRule,
    DxRangeRule,
    DxAsyncRule,
    DxButton,
    DxValidationSummary,
    DxDataGrid,
    DxColumn,
    DxSorting,
    DxSearchPanel,
    DxToast,
    ModalGrid
  },
  data() {
    return {
      name: "The commoners",
      store,
      isVisible: false,
      message: "",
      type: "success"
    };
  },
  created() {
    this.$nextTick(() => {
      // console.log(this.testData);
    });
  },
  methods: {
    openPopUp(e) {
      if (e.data.status === "Готово") {
        this.store.selectQuery = new DataSource({
          key: "data",
          load() {
            return e.data.data;
          }
        });
        this.store.showPopUp = true;
      } else {
        this.isVisible = true;
        this.message = "Выбранный отчет еще не выполнен";
        this.type = "warning";
        setTimeout(()=>{this.isVisible = false},3000)
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-div {
  display: flex;
  justify-content: space-around;
  margin-top: 5%;
  align-items: flex-start;
  flex-wrap: wrap;
}
.ki_form {
  width: 60% !important;
  border: 8px solid #f5f5f5;
  background: rgb(255 255 255 / 60%);
  text-align: center;
}
/* #443837  #483218 */
</style>
