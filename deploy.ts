import ghpages from 'gh-pages';

console.log('Publishing on Github pages');
console.log('Access to: https://nolex13.github.io/');

ghpages.publish(
	'./build',
	{
		branch: 'main',
		repo: 'git@github.com:Nolex13/Nolex13.github.io.git',
	},
	function (err) {
		console.error('Error publishing the project to Github pages', err);
	},
);
