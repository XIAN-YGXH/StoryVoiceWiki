import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
  lang: 'zh-CN',

  title: 'StoryVoice',
  description: '',

  theme: defaultTheme({
    // 侧边栏配置
    sidebar: {
      '/md/': [
        {
          children: [
            '/md/README.md',
            '/md/questions.md',
            '/md/ling1.md',
          ]
        },
        {
          text: '模式介绍',
          collapsible: true,
          children: [
            '/md/features/story1.md',
            '/md/features/story2.md',
          ]
        },
          {
          text: '客户端',
          collapsible: true,
          children: [
            '/md/client/client.md',
          ]
        },
      ]
    }
  }),

  bundler: webpackBundler(),
})
