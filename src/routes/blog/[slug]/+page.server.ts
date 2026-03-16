import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { error } from '@sveltejs/kit';

export function load({ params }) {
	const filePath = path.resolve('content/blog', `${params.slug}.md`);

	if (!fs.existsSync(filePath)) {
		error(404, 'Post not found');
	}

	const raw = fs.readFileSync(filePath, 'utf-8');
	const { data, content } = matter(raw);
	const html = marked(content);

	return {
		title: data.title ?? 'Untitled',
		date: data.date ?? '',
		tags: data.tags ?? [],
		html
	};
}
