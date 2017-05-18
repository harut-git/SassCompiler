import glob


for filename in glob.glob("*.js"):
        with open(filename, 'r') as outfile:
                for line in outfile:
                        if "casinoVersion" not in line:
                                print filename
