interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'nekonamic', // Site author
	title: 'nekonamic的博客', // Site title.
	description: '嘘を嘘で誤魔化した', // Description to display in the meta tags
	lang: 'zh-CN',
	ogLocale: 'zh-CN',
	shareMessage: '分享这篇文章', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
