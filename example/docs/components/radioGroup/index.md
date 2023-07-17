# 复选框组

###

## 基础用法

###

<script setup>
import { ref } from 'vue'

const radio = ref(3)
</script>

<cg-radio-group v-model="radio">
    <cg-radio :label="3">Option A</cg-radio>
    <cg-radio :label="6">Option B</cg-radio>
    <cg-radio :label="9" disabled>Option C</cg-radio>
</cg-radio-group>
