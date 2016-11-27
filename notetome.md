## A few commands havent been using but should

### show a calendar
cal

### tree view on a MacOSX
find . -print | sed -e 's;[^/]*/;|____;g;s;____|; |;g' # tree on linux

### zip/compress a file
zip -r archive_name.zip folder_to_compress

### unzip a file
unzip archive_name.zip

### file folder size
stat -x readme.md

### find all files modified more than 5 days ago -stale files
find my_folder -mtime +5
