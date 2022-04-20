<script setup lang="ts">
import { SettingOutlined, CloudUploadOutlined, FileOutlined, HolderOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';
import logo from '../assets/logo.png'
import { MenuKeys } from "../utils"
import { useMenuStore } from "../store/menu"


// menuStore
const menuStore = useMenuStore()

const selectMenu = (item: any ) => {
    console.log(MenuKeys[item.key])
    menuStore.selectMenu(item.key)
}

</script>

<template>
    <a-menu theme="dark" mode="inline" @select="selectMenu">
        <div class="logo">
            <img :src="logo" alt="">
        </div>
        <!-- <a-menu-item key="1">
          <pie-chart-outlined />
          <span>Option 1</span>
        </a-menu-item> -->
        <a-sub-menu key="sub1">
            <template #title>
                <span>
                    <setting-outlined />
                    <span>配置功能</span>
                </span>
            </template>
            <a-menu-item :key="MenuKeys.MBPZ">模板配置</a-menu-item>
            <a-menu-item :key="MenuKeys.TXPZ">通讯配置</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
            <template #title>
                <span>
                    <cloud-upload-outlined />
                    <span>远程功能</span>
                </span>
            </template>
            <a-menu-item :key="MenuKeys.SJJY">数据校验</a-menu-item>
            <a-menu-item :key="MenuKeys.CZCS">厂站参数</a-menu-item>
            <a-menu-item :key="MenuKeys.JLCS">计量参数</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub3">
            <template #title>
                <span>
                    <file-outlined />
                    <span>文件功能</span>
                </span>
            </template>
            <a-menu-item :key="MenuKeys.LBWJ">录波文件</a-menu-item>
            <a-menu-item :key="MenuKeys.WJCS">文件传输</a-menu-item>
            <a-menu-item :key="MenuKeys.SFTP">SFTP</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub4">
            <template #title>
                <span>
                    <holder-outlined />
                    <span>其他</span>
                </span>
            </template>
            <a-menu-item :key="MenuKeys.TBD1">TBD</a-menu-item>
            <a-menu-item :key="MenuKeys.TBD2">TBD</a-menu-item>
        </a-sub-menu>
    </a-menu>
</template>

<style scoped>
.logo {
    height: 50px;
    margin: 10px;
}

.logo img {
    width: 100%;
}
</style>