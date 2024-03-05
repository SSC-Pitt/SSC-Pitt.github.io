from scholarly import scholarly #, ProxyGenerator
#pg = ProxyGenerator()
#scholarly.use_proxy(pg)
import datetime

this_year = datetime.date.today().year
titles = []

def get_publications(author_id):
	print("Getting publications for author " + author_id)
	author = scholarly.search_author_id(author_id)
	print(author['name'])
	full_author = scholarly.fill(author)

	pubs = []
	for p in full_author['publications']:
		if p['bib']['title'] not in titles and 'pub_year' in p['bib'] and this_year - int(p['bib']['pub_year']) < 3:
			entry = {}
			pub = scholarly.fill(p)
			entry['pub_year'] = pub['bib']['pub_year']
			entry['title'] = pub['bib']['title']
			titles.append(entry['title'])
			entry['authors'] = pub['bib']['author']

			try:
				while entry['authors'].index("and") != entry['authors'].rindex("and"):
					entry['authors'] = entry['authors'].replace(" and", ",", 1)
				entry['authors'] = entry['authors'].replace(" and", ", and", 1)
			except ValueError:
				pass

			entry['citation'] = pub['bib']['citation']
			entry['pub_url'] = pub['pub_url']
			pubs.append(entry)
	return pubs

def make_html(entry):
	if len(entry['citation']) < 3:
		return ""
	html_string = f"""\t<div class="publication">
		<a href="{entry['pub_url']}" class="title">{entry['title']}</a>
		<div class="authors">{entry['authors']}</div>
		<div class="citation">{entry['citation']}</div>
	</div>"""
	return html_string

if __name__ == '__main__':
	ids = ['vbwKo5QAAAAJ', 'uQTkheYAAAAJ', 'aq5E6LEAAAAJ', 'LOLH2kkAAAAJ']
	pubs = []
	for id in ids:
		pubs.extend(get_publications(id))
	pubs = sorted(pubs, key=lambda x: x['pub_year'], reverse=True)
	for pub in pubs:
		print(make_html(pub))