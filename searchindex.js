Search.setIndex({"docnames": ["index", "materials/dgms", "materials/frequentist-learning", "materials/inference", "materials/introduction", "materials/latent-variable-models", "materials/probability-conditional", "materials/probability-continuous", "materials/probability-discrete", "materials/probability-joint", "materials/regression", "materials/vectorization-advanced", "materials/vectorization-basics"], "filenames": ["index.md", "materials/dgms.ipynb", "materials/frequentist-learning.ipynb", "materials/inference.ipynb", "materials/introduction.ipynb", "materials/latent-variable-models.ipynb", "materials/probability-conditional.ipynb", "materials/probability-continuous.ipynb", "materials/probability-discrete.ipynb", "materials/probability-joint.ipynb", "materials/regression.ipynb", "materials/vectorization-advanced.ipynb", "materials/vectorization-basics.ipynb"], "titles": ["Probabilistic Foundations of ML", "<span class=\"section-number\">7. </span>Directed Graphical Models", "<span class=\"section-number\">8. </span>The Basics of Frequentist Learning", "<span class=\"section-number\">12. </span>Inference", "<span class=\"section-number\">1. </span>What is Probabilistic ML?", "<span class=\"section-number\">11. </span>Latent Variable Models (LVMs)", "<span class=\"section-number\">5. </span>Conditional Probability (Discrete)", "<span class=\"section-number\">9. </span>Continuous Probability", "<span class=\"section-number\">4. </span>Probability (Discrete)", "<span class=\"section-number\">6. </span>Joint Probability (Discrete)", "<span class=\"section-number\">10. </span>Regression", "<span class=\"section-number\">3. </span>Advanced Vectorization in <code class=\"docutils literal notranslate\"><span class=\"pre\">Jax</span></code>", "<span class=\"section-number\">2. </span>Vectorization in <code class=\"docutils literal notranslate\"><span class=\"pre\">Jax</span></code>: An Introduction"], "terms": {"thi": [0, 1, 4, 6, 8, 9, 11, 12], "book": 0, "current": [0, 6, 12], "under": [0, 6, 11, 12], "construct": 0, "instructor": 0, "yaniv": [0, 4], "yacobi": 0, "semest": 0, "fall": 0, "2024": 0, "number": [0, 6, 8, 9, 11, 12], "cs": 0, "349": 0, "descript": 0, "In": [0, 6, 8, 9, 11, 12], "recent": 0, "year": 0, "artifici": 0, "intellig": 0, "ha": [0, 8, 11, 12], "enabl": 0, "applic": [0, 4, 11], "were": [0, 8, 9, 11, 12], "previous": [0, 6], "thought": [0, 11, 12], "possibl": [0, 8, 9, 12], "from": [0, 1, 4, 6, 8, 9, 11, 12], "system": [0, 8], "propos": 0, "novel": 0, "drug": 0, "new": [0, 6, 8, 11, 12], "art": 0, "music": 0, "accur": [0, 12], "reliabl": 0, "outcom": [0, 8], "medic": [0, 4, 8, 9], "intervent": 0, "real": [0, 9], "time": [0, 6, 8, 9, 11, 12], "But": [0, 9, 12], "what": [0, 6, 8, 9, 11, 12], "develop": [0, 9], "machin": [0, 4, 8], "learn": [0, 4, 9, 12], "paradigm": [0, 11, 12], "cast": [0, 11], "advanc": 0, "like": [0, 6, 8, 9, 12], "neural": 0, "network": 0, "statist": [0, 1, 6, 8, 9], "framework": [0, 12], "we": [0, 6, 8, 9, 11, 12], "introduc": [0, 1, 6, 8, 9, 11, 12], "concept": [0, 6, 8, 9], "behind": [0, 6, 8, 9, 12], "specif": [0, 6, 8, 9, 11, 12], "focus": 0, "connect": [0, 8], "theori": 0, "world": 0, "hand": [0, 8], "practic": [0, 4, 6, 8, 9, 11, 12], "lai": 0, "studi": 0, "research": [0, 9], "topic": [0, 1, 4], "includ": [0, 9, 11], "deep": 0, "bayesian": 0, "regress": [0, 6], "classif": [0, 6], "latent": 0, "variabl": [0, 6, 8, 9, 11, 12], "cluster": 0, "dimension": [0, 11, 12], "reduct": 0, "seri": 0, "forecast": 0, "student": [0, 4], "get": [0, 6, 9, 11], "experi": 0, "build": [0, 8, 9, 11, 12], "task": [0, 8], "most": 0, "taken": [0, 8, 12], "healthcar": 0, "context": [0, 6, 8, 9], "us": [0, 6, 9, 11, 12], "program": [0, 9], "languag": [0, 6, 8, 9], "base": [0, 9, 12], "python": [0, 8, 9, 11, 12], "todo": [0, 6, 8, 9, 11, 12], "vector": [0, 1], "jax": [0, 6, 8, 9], "an": [0, 6, 8, 9, 11], "probabl": [0, 1], "discret": 0, "condit": [0, 8, 9, 11], "joint": 0, "The": [0, 6, 8, 9, 11, 12], "basic": [0, 8, 11, 12], "frequentist": 0, "continu": [0, 6, 8, 9, 11], "lvm": 0, "import": [1, 4, 6, 8, 9, 11, 12], "some": [1, 6, 8, 9, 11, 12], "helper": [1, 6, 8, 9], "function": [1, 6, 8, 9, 11, 12], "pleas": [1, 6, 8, 9, 11, 12], "ignor": [1, 6, 8, 9], "util": [1, 6, 8, 9], "goal": [1, 6], "describ": [1, 6, 8, 9, 11], "data": [1, 4, 6, 8, 9, 11, 12], "given": [1, 6, 8, 9, 11, 12], "paramet": [1, 6, 8, 9], "independ": [1, 6, 8, 9, 11, 12], "between": [1, 6, 8, 9, 11, 12], "observ": [1, 6, 8, 9], "represent": [1, 9], "numpyro": [1, 6, 8, 12], "distribut": [1, 9], "primit": 1, "implement": [1, 9, 11, 12], "who": 4, "why": [4, 8, 9, 11, 12], "big": 4, "deal": 4, "cours": [4, 11, 12], "i": [4, 6, 8, 9, 11, 12], "e": [4, 6, 8, 9, 11, 12], "perspect": 4, "highlight": [4, 9], "assumpt": 4, "subject": [4, 11], "natur": 4, "ai": 4, "allow": [4, 6, 9, 11, 12], "quantif": 4, "uncertainti": 4, "ethic": 4, "fair": [4, 8], "safeti": 4, "critic": 4, "etc": [4, 6, 8, 11, 12], "provid": [4, 9, 11], "unifi": 4, "think": [4, 9, 12], "deriv": 4, "model": [4, 6, 8, 12], "instead": [4, 9, 11, 12], "bag": 4, "trick": 4, "overview": 4, "you": [4, 6, 8, 9, 11, 12], "can": [4, 6, 8, 9, 11, 12], "expect": 4, "me": 4, "how": [4, 6, 8, 9, 11, 12], "succe": [4, 8], "group": 4, "activ": 4, "commun": 4, "standard": 4, "both": [4, 8, 9, 11], "faculti": 4, "broader": 4, "impact": 4, "analysi": [4, 6, 8, 9], "do": [4, 6, 8, 9, 11, 12], "congratul": 4, "ve": [4, 6, 8, 9], "been": [4, 8, 11, 12], "hire": 4, "join": 4, "team": [4, 8], "intergalact": [4, 8], "hypothet": 4, "hospit": [4, 6, 8, 9], "ihh": [4, 6, 8, 9], "where": [4, 6, 8, 9, 11, 12], "ll": [4, 6, 8, 9, 12], "leverag": [4, 6, 12], "routin": 4, "collect": [4, 6], "help": [4, 8, 9, 11, 12], "improv": [4, 6], "treatment": 4, "beings": [4, 6, 8], "across": [4, 11], "galaxi": 4, "alreadi": [6, 8, 9, 11, 12], "spent": [6, 9], "conduct": [6, 9], "preliminari": [6, 8, 9], "exploratori": [6, 8, 9], "eda": [6, 8, 9], "s": [6, 8, 9, 11, 12], "er": [6, 8, 9], "notic": [6, 9, 11, 12], "consid": [6, 8, 9, 11, 12], "separ": [6, 8, 9], "result": [6, 8, 9, 11, 12], "mislead": [6, 9], "inform": [6, 8, 9, 11], "As": [6, 8, 9, 11], "todai": [6, 8], "your": [6, 8, 9, 11, 12], "also": [6, 9, 11, 12], "relationship": [6, 9], "For": [6, 8, 9, 11, 12], "exampl": [6, 8, 9, 11, 12], "mai": [6, 8, 9, 11, 12], "want": [6, 8, 9, 11, 12], "know": [6, 9], "ar": [6, 8, 9, 11, 12], "certain": [6, 11], "more": [6, 9, 11, 12], "occur": [6, 8, 11], "dai": [6, 8, 9], "make": [6, 8, 9, 11, 12], "patient": [6, 8, 9], "need": [6, 8, 9, 12], "challeng": [6, 8, 9], "so": [6, 8, 9, 11, 12], "far": [6, 9], "howev": [6, 9, 11, 12], "onli": [6, 9, 11, 12], "seen": [6, 8], "wai": [6, 9, 11, 12], "character": 6, "stochast": [6, 8], "univari": 6, "random": [6, 8, 9], "phenomenon": [6, 8], "other": [6, 8, 11, 12], "answer": [6, 8, 9, 11, 12], "outlin": [6, 8, 9, 12], "leav": [6, 8, 9, 12], "later": [6, 8, 9, 11, 12], "abov": [6, 8, 9, 11, 12], "question": [6, 8, 9, 12], "toolset": [6, 8], "befor": [6, 9, 11, 12], "start": [6, 8, 9, 11], "let": [6, 8, 9, 11, 12], "load": [6, 8], "our": [6, 8, 9, 12], "bunch": [6, 8], "librari": [6, 8, 11, 12], "below": [6, 8, 9, 11, 12], "panda": [6, 8], "pd": [6, 8], "matplotlib": [6, 8], "pylab": [6, 8], "plt": [6, 8], "d": [6, 8, 9, 11], "numpi": [6, 8, 9, 11, 12], "jnp": [6, 8, 9, 11, 12], "datafram": [6, 8], "csv_fname": [6, 8], "csv": [6, 8], "read_csv": [6, 8], "index_col": [6, 8], "id": [6, 8], "print": [6, 8, 9, 11, 12], "sampl": [6, 8, 9], "5": [6, 8, 11, 12], "just": [6, 8, 9, 11, 12], "see": [6, 8, 9, 11, 12], "15": [6, 8, 9, 11, 12], "random_st": [6, 8], "0": [6, 8, 9, 11, 12], "week": [6, 8, 9], "antibiot": [6, 8], "attempt": [6, 8], "disentangl": [6, 8], "9394": [6, 8], "fridai": [6, 8, 9], "allerg": [6, 8, 9], "reaction": [6, 8, 9], "No": [6, 8, 9], "nan": [6, 8], "898": [6, 8], "sundai": [6, 8, 9], "ye": [6, 8, 9], "2398": [6, 8], "saturdai": [6, 8, 9], "entangl": [6, 8, 9], "antenna": [6, 8, 9], "4": [6, 8, 9, 11, 12], "5906": [6, 8], "2343": [6, 8], "mondai": [6, 8, 9], "high": [6, 8, 9, 12], "fever": [6, 8, 9], "8225": [6, 8], "thursdai": [6, 8, 9], "5506": [6, 8], "tuesdai": [6, 8, 9], "6451": [6, 8], "2670": [6, 8], "intox": [6, 8, 9], "3497": [6, 8], "1087": [6, 8], "1819": [6, 8], "2308": [6, 8], "6084": [6, 8], "3724": [6, 8], "non": [6, 9, 11, 12], "here": [6, 8, 9, 11, 12], "precis": [6, 8, 9], "specifi": [6, 8, 9, 12], "comput": [6, 8, 9, 11, 12], "futur": [6, 8], "translat": [6, 8, 12], "statement": [6, 8, 9, 11], "directli": [6, 8, 9], "code": [6, 8, 11, 12], "run": [6, 8, 9, 12], "ask": 6, "form": [6, 9], "A": [6, 8, 9, 12], "true": [6, 8, 11, 12], "b": [6, 9, 11, 12], "although": 6, "simpl": [6, 9], "idea": [6, 9], "actual": [6, 12], "quit": 6, "power": [6, 11, 12], "all": [6, 8, 9, 11, 12], "predict": [6, 9], "have": [6, 8, 9, 11, 12], "heard": [6, 9], "g": [6, 8, 9, 11, 12], "formul": 6, "To": [6, 9, 12], "mean": [6, 8, 9, 11, 12], "suppos": [6, 9, 11, 12], "re": [6, 8, 9, 11, 12], "work": [6, 8, 9, 12], "next": [6, 8, 12], "come": [6, 8, 9, 11, 12], "estim": 6, "count": [6, 8, 12], "which": [6, 8, 9, 11, 12], "divid": 6, "total": [6, 12], "begin": [6, 9, 11], "align": [6, 9, 11], "text": [6, 9, 11], "frac": 6, "end": [6, 9, 11, 12], "call": [6, 8, 9, 11, 12], "naiv": 6, "predictor": 6, "now": [6, 8, 9, 11, 12], "num_intox": 6, "len": 6, "num_tot": 6, "naive_probability_of_intox": 6, "float": [6, 11, 12], "portion": [6, 12], "round": 6, "3": [6, 9, 11, 12], "171": 6, "even": [6, 11], "reach": 6, "outer": 6, "univers": [6, 9], "through": [6, 9], "take": [6, 8, 9, 11, 12], "off": [6, 8], "therefor": [6, 12], "suspect": 6, "weekend": 6, "decid": [6, 8, 9, 12], "check": [6, 9, 11, 12], "whether": [6, 8, 9], "intuit": [6, 9, 12], "If": [6, 8, 11], "abil": 6, "modifi": 6, "follow": [6, 8, 9, 11, 12], "days_of_week": 6, "wednesdai": [6, 9], "iter": 6, "over": [6, 8, 9, 12], "select": [6, 8, 11], "came": [6, 8], "patients_on_dai": 6, "Of": [6, 12], "further": [6, 9], "patient_intoxicated_on_dai": 6, "portion_intoxicated_on_dai": 6, "percentag": [6, 8], "append": [6, 8], "plot": [6, 8], "bar": [6, 8], "label": [6, 8], "axhlin": 6, "color": 6, "red": 6, "add": [6, 8, 9, 11], "axi": [6, 8, 11, 12], "titl": [6, 8], "xtick": [6, 8], "rotat": [6, 8], "30": [6, 8, 12], "xlabel": [6, 8], "ylabel": [6, 8], "legend": 6, "show": [6, 8, 12], "arriv": [6, 8, 9], "chang": [6, 8, 9, 11, 12], "significantli": 6, "weekdai": 6, "addit": [6, 11], "definit": [6, 9], "anoth": [6, 8, 9, 11, 12], "denot": [6, 8, 9], "p_i": [6, 9], "cdot": [6, 8, 9, 11, 12], "It": [6, 9, 11, 12], "repres": [6, 8, 9], "inaccur": 6, "contrast": [6, 9, 11], "p_": [6, 9], "right": [6, 8, 9, 11], "side": [6, 8], "vertic": 6, "line": [6, 11], "space": [6, 8, 9], "support": [6, 8], "sinc": [6, 8, 9, 11, 12], "still": [6, 9, 11, 12], "hold": 6, "left": 6, "That": [6, 9, 11, 12], "1": [6, 8, 9, 11, 12], "mass": [6, 8], "pmf": [6, 8, 9], "again": [6, 9, 11], "differ": [6, 8, 9, 11, 12], "bernoulli": [6, 8, 9], "two": [6, 8, 9, 11, 12], "valu": [6, 8, 11, 12], "depend": [6, 12], "write": [6, 8, 9, 11, 12], "underbrac": [6, 9], "rho": [6, 8, 9], "_": [6, 9], "wikipedia": [6, 8], "case": [6, 11, 12], "sens": [6, 8, 9], "els": [6, 11, 12], "express": [6, 11, 12], "ident": [6, 8], "sim": [6, 8], "mathrm": [6, 9], "one": [6, 8, 9, 11, 12], "tell": [6, 11, 12], "noth": 6, "about": [6, 9, 11, 12], "note": [6, 9, 11, 12], "without": [6, 9, 11], "mani": [6, 8, 9, 11, 12], "could": 6, "higher": [6, 12], "overal": [6, 8, 9], "summari": [6, 8], "r": [6, 8, 11], "c": [6, 9, 11], "rv": [6, 8, 9], "evalu": [6, 8, 9], "defin": [6, 8], "h": [6, 8, 9], "m": [6, 9, 11, 12], "each": [6, 8, 9, 11, 12], "sai": [6, 8, 9, 12], "part": [6, 9, 11, 12], "By": [6, 11, 12], "explor": [6, 9], "did": [6, 8], "empir": 6, "don": [6, 8, 9, 12], "t": [6, 8, 9, 12], "forget": [6, 11], "gener": [6, 9, 12], "2": [6, 9, 11, 12], "compar": 6, "its": [6, 8, 9, 11, 12], "correspond": [6, 12], "version": [6, 12], "margin": [6, 9], "first": [8, 9, 11, 12], "assign": 8, "ml": [8, 9, 11, 12], "better": 8, "understand": [8, 9], "emerg": 8, "room": 8, "level": 8, "everi": [8, 11, 12], "inflam": 8, "being": 8, "remain": 8, "night": 8, "carri": 8, "out": [8, 9, 11, 12], "cannot": [8, 12], "singl": [8, 9, 11, 12], "give": [8, 9, 11], "determinist": 8, "whose": [8, 11], "respons": 8, "inher": 8, "block": [8, 11, 12], "complex": 8, "spirit": 8, "scienc": 8, "class": [8, 12], "solv": [8, 11, 12], "problem": [8, 9, 12], "slightli": 8, "ones": [8, 12], "reason": [8, 11], "hone": 8, "minim": 8, "subset": 8, "probabilist": [8, 9], "n": [8, 11, 12], "particular": [8, 11], "On": 8, "set": [8, 9, 12], "must": [8, 9], "countabl": 8, "though": [8, 12], "infti": 8, "ani": [8, 9, 11, 12], "theoret": 8, "speak": 8, "map": [8, 9], "unit": [8, 12], "interv": 8, "p": [8, 11], "rightarrow": 8, "p_n": 8, "dot": 8, "argument": [8, 9, 11, 12], "told": 8, "exactli": [8, 9, 11], "10": [8, 11, 12], "notabl": [8, 9], "properti": [8, 9, 11], "sum": [8, 11, 12], "limits_": [8, 11, 12], "same": [8, 9, 11, 12], "affect": [8, 9, 11], "thei": [8, 9, 11, 12], "when": [8, 9, 11, 12], "flip": [8, 11], "coin": 8, "previou": [8, 11, 12], "land": 8, "head": 8, "doe": [8, 9, 11, 12], "signifi": 8, "accord": 8, "p_r": 8, "equal": [8, 9, 12], "brows": 8, "page": 8, "categor": 8, "binomi": 8, "geometr": 8, "poisson": 8, "Then": 8, "everydai": 8, "life": 8, "explain": [8, 11, 12], "hint": [8, 12], "panel": 8, "summar": 8, "rest": 8, "choic": [8, 9], "option": [8, 9], "tail": 8, "p_h": 8, "leq": [8, 11], "indic": [8, 12], "averag": 8, "half": 8, "read": [8, 12], "store": [8, 12], "file": 8, "contain": [8, 11, 12], "sever": [8, 9, 12], "uniqu": 8, "identifi": 8, "worri": 8, "de": 8, "anonym": 8, "back": [8, 11], "record": 8, "varieti": 8, "wa": [8, 9, 11, 12], "becaus": [8, 9, 11, 12], "doctor": 8, "try": [8, 9, 11, 12], "them": [8, 9, 11], "after": [8, 11], "doesn": 8, "fanci": 8, "isn": [8, 9], "perfect": 8, "requir": [8, 12], "few": [8, 12], "field": 8, "visual": [8, 12], "googl": [8, 12], "around": [8, 12], "determin": [8, 9, 11, 12], "appropri": 8, "value_count": 8, "sort": 8, "normal": [8, 12], "put": [8, 12], "name": 8, "x": [8, 9, 11], "y": [8, 11], "item": [8, 11], "list": [8, 9, 11, 12], "best": [8, 9, 11, 12], "choos": [8, 9], "justifi": 8, "lack": 8, "kind": 8, "miss": 8, "would": [8, 11, 12], "recommend": [8, 11, 12], "jointli": [8, 9], "up": [8, 11, 12], "evid": 8, "abl": 9, "These": [9, 12], "administr": 9, "decis": 9, "toolkit": 9, "limit": 9, "than": [9, 11, 12], "inquir": 9, "expand": 9, "yet": [9, 11], "tool": [9, 11], "fit": 9, "eleg": 9, "complic": [9, 11], "cover": [9, 12], "illustr": [9, 12], "satisfi": 9, "factor": 9, "product": 9, "p_b": 9, "quad": 9, "phantom": 9, "p_a": 9, "term": [9, 11, 12], "formula": 9, "depict": 9, "event": 9, "diagram": 9, "pictor": 9, "interest": [9, 12], "ratio": 9, "blue": 9, "circl": 9, "rel": [9, 12], "whole": [9, 11], "grai": 9, "squar": [9, 11], "purpl": 9, "intersect": 9, "final": 9, "place": 9, "cancel": 9, "lastli": [9, 11, 12], "typic": [9, 11], "p_d": 9, "well": [9, 11], "littl": [9, 11, 12], "weird": 9, "lot": [9, 12], "wonder": [9, 12], "three": 9, "appli": [9, 12], "wherein": 9, "p_c": 9, "And": [9, 11], "simpli": [9, 12], "increas": 9, "veri": [9, 11, 12], "quickli": 9, "fact": 9, "unwieldi": 9, "becom": [9, 11, 12], "analyst": 9, "compon": 9, "simplifi": 9, "often": [9, 12], "domain": 9, "knowledg": [9, 12], "equat": 9, "impli": 9, "entir": 9, "implic": 9, "interfac": [9, 12], "nearli": 9, "stat": 9, "wrote": [9, 12], "focu": [9, 11], "conceptu": 9, "instanti": 9, "complet": [9, 12], "avail": 9, "document": [9, 11, 12], "own": [9, 12], "easi": 9, "subtl": 9, "bug": [9, 12], "hard": [9, 11], "catch": 9, "mathemat": [9, 12], "logic": [9, 11], "bog": 9, "down": [9, 12], "detail": 9, "method": 9, "reli": [9, 12], "togeth": [9, 11, 12], "necessari": 9, "jrandom": 9, "simplest": 9, "p_x": 9, "bern": 9, "recal": [9, 11], "vs": 9, "7": [9, 11, 12], "arrai": 9, "log_prob": 9, "return": [9, 11, 12], "log": [9, 12], "exponenti": 9, "log_p_x_eq_1": 9, "exp": 9, "log_p_x_eq_0": 9, "draw": 9, "kei": 9, "control": [9, 12], "shape": [9, 11], "go": [9, 11, 12], "wish": 9, "key1": 9, "prngkei": 9, "seed": 9, "creat": [9, 11, 12], "batch": 9, "drawn": 9, "second": [9, 11, 12], "key2": 9, "third": 9, "twice": 9, "exact": 9, "bless": 9, "curs": 9, "prove": 9, "crucial": 9, "debug": [9, 11], "accident": 9, "sourc": 9, "manag": 9, "rule": [9, 11], "thumb": [9, 11], "ONE": 9, "never": 9, "restrict": 9, "ourselv": [9, 11], "multipl": [9, 12], "split": [9, 11], "purpos": [9, 11, 12], "whenev": [9, 11, 12], "key_first": 9, "key_second": 9, "key_third": 9, "friend": 9, "nearbi": 9, "she": 9, "sensit": 9, "obtain": 9, "credenti": 9, "undergo": 9, "lengthi": 9, "train": [9, 12], "secur": 9, "access": 9, "realist": 9, "gain": [9, 12], "month": 9, "her": 9, "send": 9, "characterist": 9, "violat": 9, "privaci": 9, "constraint": [9, 11], "tandem": 9, "should": [9, 11, 12], "output": [9, 11, 12], "dictionari": 9, "integ": [9, 11], "string": 9, "convert": [9, 12], "opposit": 9, "idx_to_day_of_week": 9, "idx_to_condit": 9, "broken": 9, "limb": 9, "idx_to_bool": 9, "def": [9, 11, 12], "sample_ihh_er_generative_model": 9, "pass": [9, 11, 12], "guid": 11, "multi": [11, 12], "loop": [11, 12], "common": 11, "acknowledg": [11, 12], "tutori": [11, 12], "adapt": [11, 12], "wherea": 11, "slice": 11, "extract": [11, 12], "contigu": 11, "chunk": 11, "subsect": [11, 12], "element": [11, 12], "belong": 11, "origin": [11, 12], "easier": 11, "shown": 11, "rememb": 11, "introductori": 11, "perform": [11, 12], "oper": 11, "arang": [11, 12], "6": [11, 12], "8": [11, 12], "9": [11, 12], "fals": [11, 12], "easili": [11, 12], "behavior": 11, "f": 11, "odd": 11, "is_even": 11, "27": 11, "16": 11, "125": 11, "36": 11, "343": 11, "64": 11, "729": 11, "multipli": 11, "automat": [11, 12], "wherev": 11, "otherwis": 11, "notat": [11, 12], "look": [11, 12], "while": [11, 12], "pedagog": 11, "obfusc": 11, "cleaner": 11, "interpret": 11, "row": [11, 12], "12": [11, 12], "reshap": [11, 12], "contains_number_divisible_by_5": 11, "divis": 11, "11": [11, 12], "posit": 11, "dtype": [11, 12], "float32": [11, 12], "coordin": 11, "radiu": 11, "except": [11, 12], "within": 11, "j": [11, 12], "int32": [11, 12], "similarli": [11, 12], "boolean_indexing_q1": 11, "boolean_indexing_q2": 11, "sometim": [11, 12], "25": 11, "49": 11, "81": 11, "100": 11, "121": 11, "arrang": 11, "size": [11, 12], "dimens": [11, 12], "tupl": [11, 12], "pair": 11, "matrix": 11, "along": [11, 12], "diagon": 11, "13": [11, 12], "14": [11, 12], "exist": [11, 12], "sake": 11, "extend": [11, 12], "keyword": [11, 12], "offset": 11, "built": [11, 12], "yourself": [11, 12], "integer_indexing_q1": 11, "integer_indexing_q2": 11, "treat": 11, "dure": 11, "arithmet": [11, 12], "smaller": 11, "larger": 11, "compat": 11, "fast": [11, 12], "hood": [11, 12], "needless": 11, "copi": 11, "input": [11, 12], "repeatedli": 11, "prepend": 11, "until": [11, 12], "act": 11, "had": 11, "largest": 11, "assum": 11, "repeat": 11, "0th": [11, 12], "ad": 11, "elementwis": [11, 12], "replac": 11, "surpris": 11, "happen": [11, 12], "subtract": 11, "There": [11, 12], "pairwis": 11, "great": 11, "trigger": 11, "unintention": 11, "find": [11, 12], "unequ": 11, "error": [11, 12], "desir": [11, 12], "section": 11, "accept": 11, "c_": 11, "b_": 11, "a_": 11, "17": 11, "41": 11, "37": 11, "20": [11, 12], "34": 11, "26": 11, "29": [11, 12], "broadcasting_q1": 11, "checkout": 11, "saw": [11, 12], "subtli": 11, "sneak": 11, "luckili": 11, "assert": 11, "rais": 11, "someth": [11, 12], "notin": 11, "went": 11, "wrong": 11, "speed": [11, 12], "process": [11, 12], "ensur": 11, "correct": 11, "fail": 11, "clue": 11, "thing": [11, 12], "remov": [11, 12], "technic": [11, 12], "anyth": 11, "might": [11, 12], "optim": 11, "special": 11, "rang": [11, 12], "length": [11, 12], "lingo": 11, "rank": 11, "split_2d_arrai": 11, "assert_rank": 11, "partition_s": 11, "int": [11, 12], "part1": 11, "part2": 11, "assert_shap": 11, "insid": 11, "simplic": 11, "concern": 11, "least": [11, 12], "numer": 12, "capabl": 12, "hardwar": 12, "graphic": 12, "gpu": 12, "commonli": 12, "main": 12, "interact": 12, "unlik": 12, "similar": 12, "offer": 12, "featur": 12, "effici": 12, "approxim": 12, "gradient": 12, "written": 12, "much": 12, "throughout": 12, "conveni": 12, "spend": 12, "less": 12, "wait": 12, "algorithm": 12, "shift": 12, "vanilla": 12, "slow": 12, "encourag": 12, "avoid": 12, "handi": 12, "heavi": 12, "known": 12, "onc": 12, "imit": 12, "popular": 12, "internet": 12, "resourc": 12, "newer": 12, "ok": 12, "moreov": 12, "usual": 12, "caution": 12, "NOT": 12, "mix": 12, "vice": 12, "versa": 12, "THAT": 12, "throw": 12, "difficult": 12, "One": 12, "keep": 12, "mistak": 12, "immut": 12, "alter": 12, "brand": 12, "index": 12, "arr": 12, "seem": 12, "realli": 12, "ineffici": 12, "constantli": 12, "burden": 12, "request": 12, "memori": 12, "awar": 12, "save": 12, "unsur": 12, "plai": 12, "confus": 12, "jargon": 12, "tinker": 12, "bit": 12, "small": 12, "area": 12, "ndim": 12, "type": 12, "array_of_int": 12, "array_of_float": 12, "astyp": 12, "regular": 12, "deduc": 12, "sequenc": 12, "array_from_list": 12, "zero": 12, "full": 12, "default": 12, "float64": 12, "via": 12, "array_of_zero": 12, "array_of_on": 12, "analog": 12, "linspac": 12, "increment": 12, "19": 12, "done": 12, "calcul": 12, "unsquees": 12, "squeez": 12, "pad": 12, "unsqueez": 12, "turn": 12, "concaten": 12, "th": 12, "a_unsqueez": 12, "none": 12, "b_unsqueez": 12, "a_and_b": 12, "meant": 12, "ellipsi": 12, "preserv": 12, "fill": 12, "40": 12, "50": 12, "doubl": 12, "star": 12, "sin": 12, "35": 12, "38": 12, "47": 12, "129453": 12, "880316": 12, "4511313": 12, "6237485": 12, "80": 12, "150": 12, "wise": 12, "match": 12, "minimum": 12, "maximum": 12, "min": 12, "max": 12, "oftentim": 12, "column": 12, "18": 12, "21": 12, "ax": 12, "revers": 12, "alwai": 12, "neg": 12, "sure": 12, "link": 12, "test": 12, "104412": 12, "42": 12, "335617": 12, "tile": 12, "transpos": 12, "84": 12, "905975": 12, "2507": 12, "8206": 12, "array_operations_q1": 12, "array_operations_q2": 12, "machineri": 12, "everyth": 12, "5th": 12, "onward": 12, "2nd": 12, "6th": 12, "last": 12, "view": 12, "3th": 12, "1st": 12, "3rd": 12, "simultan": 12, "elipsi": 12, "earlier": 12, "k": 12, "l": 12, "alon": 12, "entri": 12, "array_slicing_q1": 12, "array_slicing_q2": 12}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"probabilist": [0, 4], "foundat": 0, "ml": [0, 4], "syllabu": 0, "schedul": 0, "cours": 0, "materi": 0, "introduct": [0, 12], "direct": [0, 1, 9], "graphic": [0, 1, 9], "model": [0, 1, 5, 9], "predict": 0, "gener": 0, "infer": [0, 3], "The": 2, "basic": 2, "frequentist": 2, "learn": [2, 6], "what": 4, "latent": 5, "variabl": 5, "lvm": 5, "condit": 6, "probabl": [6, 7, 8, 9], "discret": [6, 8, 9], "terminolog": [6, 8, 9], "notat": [6, 8, 9], "distribut": [6, 8], "hand": 6, "exercis": [6, 8, 9, 11, 12], "continu": 7, "get": 8, "familiar": 8, "us": 8, "match": 8, "scenario": 8, "joint": 9, "translat": 9, "math": 9, "code": 9, "numpyro": 9, "regress": 10, "advanc": 11, "vector": [11, 12], "jax": [11, 12], "index": 11, "boolean": 11, "arrai": [11, 12], "indic": 11, "broadcast": 11, "catch": 11, "bug": 11, "earli": 11, "chex": 11, "an": 12, "tip": 12, "advic": 12, "properti": 12, "creation": 12, "shape": 12, "manipul": 12, "oper": 12, "slice": 12}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})