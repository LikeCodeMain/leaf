import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import dts from 'vite-plugin-dts'; // 自动生成类型定义文件

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true, // 生成类型入口文件
      outDir: 'dist', // 类型文件输出目录
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'Leaf',
      fileName: (format) => `leaf.${format}.js`,
      formats: ['es', 'cjs', 'umd']
    },
    rollupOptions: {
      // 将 Vue 作为外部依赖，不打包进库
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
});

