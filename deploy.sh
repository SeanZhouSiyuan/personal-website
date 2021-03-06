# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

git remote add origin git@github.com:SeanZhouSiyuan/SeanZhouSiyuan.github.io.git
git push -f git@github.com:SeanZhouSiyuan/SeanZhouSiyuan.github.io.git master

cd -