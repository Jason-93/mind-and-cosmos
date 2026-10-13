/** 滚动到指定区块（配合路由跳转后使用） */
export function scrollToId(id: string) {
  requestAnimationFrame(() => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
}
