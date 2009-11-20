require 'nanoc3/tasks'

task :copy_assets do
  system "rsync -gprt --partial assets/ output"
end

task :compile do
  system "nanoc3 co"
end

task :deploy do
  system "rsync -ave ssh --delete output/* telana.com:/www/dipert.org/subdomains/interlock"
end

task :build => [:compile, :copy_assets ]
task :deploy => [:build]
task :default => :build
