#!/bin/sh

# copy files | https://tosbourn.com/copy-rename-multiple-files-linux/
for i in ./build/static/js/main.*; do cp $i `echo $i | sed "s/main.*.js/minisymposiumForm.js/g"`; done

# copy files | https://tosbourn.com/copy-rename-multiple-files-linux/
for i in ./build/static/css/main.*; do cp $i `echo $i | sed "s/main.*.css/minisymposiumForm.css/g"`; done


# update sourcemap | sed osx backup - https://stackoverflow.com/a/25486705/1072776 
sed -i "" -e "s/sourceMappingURL=main.*.js/sourceMappingURL=minisymposiumForm.js/g" 
sed -i "" -e "s/sourceMappingURL=main.*.css/sourceMappingURL=minisymposiumForm.css/g" 
./build/static/js/minisymposiumForm.js
./build/static/js/minisymposiumForm.css