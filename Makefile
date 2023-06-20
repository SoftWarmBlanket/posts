BUILD_D=build
SRC_D=src
SKELETON_F=src/skeleton.html
PANDOC=pandoc

.PHONY: build
build : src/ ${SKELETON_F}
	mkdir -p build/$(POST)
	cp -rf assets build/$(POST)
	${PANDOC} --section-divs src/$(POST)/content.md --from markdown --to html --mathml --output build/$(POST)/content.html
	# old pyexpander flow
	# expander3.py --auto-continuation --file ${SKELETON_F} > ${BUILD_D}/index.html
	python3 src/skeleton.py build/$(POST)/content.html > build/$(POST)/index.html

.PHONY: fmt
fmt :
	${PANDOC} ${MAIN_F} --columns 72 --from gfm --to gfm --output ${MAIN_F}
