# -*- coding: utf-8 -*-
"""观测者章节的全站接线：编号、导航、路由顺序、新卡片。"""
import io


def patch(path, old, new, count=1):
    s = io.open(path, encoding='utf-8').read()
    assert old in s, f'{path}: NOT FOUND -> {old[:50]}'
    s = s.replace(old, new, count)
    io.open(path, 'w', encoding='utf-8').write(s)
    print('patched', path)


# 1. TOPIC_ORDER：观测者 5 主题 + 生命/费米 + 演化
patch('src/data/types.ts',
      "  'recurrence',\n  'bigbang',",
      "  'recurrence',\n  'delayed-choice',\n  'eraser',\n  'participatory',\n  'relational',\n  'contextuality',\n  'bigbang',")
patch('src/data/types.ts',
      "  'dark',\n  'cyclic',",
      "  'dark',\n  'abiogenesis',\n  'fermi',\n  'cyclic',")
patch('src/data/types.ts',
      "  'predictive',\n",
      "  'predictive',\n  'evolution',\n")

# 2. topics.ts 合并 observerTopics
patch('src/data/topics.ts',
      "import { identityTopics } from './topics-identity'",
      "import { identityTopics } from './topics-identity'\nimport { observerTopics } from './topics-observer'")
patch('src/data/topics.ts',
      "  ...identityTopics,",
      "  ...identityTopics,\n  ...observerTopics,")

# 3. cosmos 详情页 section 字段 06 -> 07
p = 'src/data/topics-cosmos.ts'
s = io.open(p, encoding='utf-8').read()
n = s.count("section: '06 · 宇宙起源'")
s = s.replace("section: '06 · 宇宙起源'", "section: '07 · 宇宙起源'")
io.open(p, 'w', encoding='utf-8').write(s)
print('cosmos section fields updated:', n)

# 4. Cosmos.tsx 编号 + 图标导入 + 两张新卡片（插在 cyclic 之前）
patch('src/sections/Cosmos.tsx', 'index="06"', 'index="07"')
patch('src/sections/Cosmos.tsx',
      "import { Rocket, Wind, Recycle, Compass, Percent } from 'lucide-react'",
      "import { Rocket, Wind, Recycle, Compass, Percent, Leaf, Satellite } from 'lucide-react'")

NEW_COSMOS_CARDS = '''  {
    id: 'abiogenesis',
    icon: Leaf,
    tag: '生命起源',
    title: '生命的起源：从化学到生物学的断裂带',
    body: '元素来源已基本查明，但从原子到第一个细胞的跨越至今无一条被证实的路径。RNA 世界、代谢优先、膜优先三条路线各困于各自的“鸡生蛋”——而它决定了我们在宇宙中是否孤独。',
    accent: 'emerald',
  },
  {
    id: 'fermi',
    icon: Satellite,
    tag: '费米悖论',
    title: '费米悖论：宇宙为何如此寂静',
    body: '1950 年费米一句“他们在哪”悬置至今：行星比比皆是，文明却无声无息。一百个候选解答——大过滤器、自我毁灭、内卷、动物园——每一个都指向人类不同的命运。',
    accent: 'indigo',
  },
'''
p = 'src/sections/Cosmos.tsx'
s = io.open(p, encoding='utf-8').read()
anchor = "  {\n    id: 'cyclic',"
assert anchor in s
s = s.replace(anchor, NEW_COSMOS_CARDS + anchor, 1)
io.open(p, 'w', encoding='utf-8').write(s)
print('Cosmos cards added')

# 5. Finale 编号 07 -> 08
patch('src/sections/Finale.tsx', 'index="07"', 'index="08"')

# 6. Neuroscience.tsx 图标导入 + 演化卡片（数组末尾）
patch('src/sections/Neuroscience.tsx',
      "import { Scissors, Timer, RadioTower, Sigma, Radar } from 'lucide-react'",
      "import { Scissors, Timer, RadioTower, Sigma, Radar, Dna } from 'lucide-react'")

NEW_NEURO_CARD = '''  {
    id: 'evolution',
    icon: Dna,
    tag: '演化视角',
    title: '意识的演化：为什么会有体验者？',
    body: '如果僵尸可以完成全部生存任务，自然选择为什么要“发明”体验？从注意图式理论到章鱼与乌鸦独立演化的智能，体验是适应的目标，还是高效计算的副产品？',
    accent: 'amber',
  },
'''
p = 'src/sections/Neuroscience.tsx'
s = io.open(p, encoding='utf-8').read()
cut = s.index('export default function')
head, tail = s[:cut], s[cut:]
close = head.rfind(']')
head = head[:close].rstrip()
if not head.endswith(','):
    head += ','
head = head + '\n' + NEW_NEURO_CARD + ']\n\n'
io.open(p, 'w', encoding='utf-8').write(head + tail)
print('Neuroscience card added')

# 7. Nav 增加观测者
patch('src/components/Nav.tsx',
      "  { id: 'identity', label: '粒子与轮回' },",
      "  { id: 'identity', label: '粒子与轮回' },\n  { id: 'observer', label: '观测者' },")

# 8. Home.tsx 插入 Observer 章节
patch('src/pages/Home.tsx',
      "import Identity from '@/sections/Identity'",
      "import Identity from '@/sections/Identity'\nimport Observer from '@/sections/Observer'")
patch('src/pages/Home.tsx',
      '        <Identity />\n        <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />\n        <Cosmos />',
      '        <Identity />\n        <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />\n        <Observer />\n        <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />\n        <Cosmos />')

# 9. Map 导读章节引用更新
p = 'src/sections/Map.tsx'
s = io.open(p, encoding='utf-8').read()
old = '量子身份之谜（第五章）拆问“个体性是否真实”；'
new = '量子身份之谜（第五章）拆问“个体性是否真实”；观测者的物理学（第六章）质问“观察是否创造实在”；'
assert old in s, 'Map anchor not found'
s = s.replace(old, new)
s = s.replace('宇宙学（第六章）直面起源本身。', '宇宙学（第七章）直面起源本身。')
io.open(p, 'w', encoding='utf-8').write(s)
print('Map updated')

print('ALL PATCHED')
