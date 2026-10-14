# -*- coding: utf-8 -*-
import glob, io, os, sys

MAPPING = {
 'question-mind': (['mind'], ['descartes','split-brain','evolution','participatory']),
 'question-matter': (['matter'], ['particle-identity','emergent-spacetime','physicalism','holography']),
 'question-origin': (['origin'], ['bigbang','why-anything','abiogenesis','recurrence']),
 'greek': (['matter','origin'], ['motifs','india','china','descartes']),
 'india': (['mind','origin'], ['china','motifs','panpsychism','recurrence']),
 'china': (['mind','matter'], ['india','motifs','spinoza','panpsychism']),
 'abrahamic': (['matter','origin'], ['motifs','why-anything','cyclic','inflation']),
 'motifs': (['mind','matter','origin'], ['greek','india','china','abrahamic']),
 'descartes': (['mind'], ['physicalism','spinoza','split-brain','question-mind']),
 'physicalism': (['mind','matter'], ['descartes','panpsychism','gwt','question-matter']),
 'idealism': (['mind','matter'], ['physicalism','participatory','relational','question-mind']),
 'spinoza': (['mind','matter'], ['descartes','physicalism','panpsychism','relational']),
 'panpsychism': (['mind','matter'], ['physicalism','iit','particle-identity','spinoza']),
 'split-brain': (['mind'], ['libet','gwt','evolution','descartes']),
 'libet': (['mind'], ['split-brain','evolution','gwt','predictive']),
 'gwt': (['mind'], ['iit','predictive','split-brain','evolution']),
 'iit': (['mind','matter'], ['gwt','panpsychism','predictive','evolution']),
 'predictive': (['mind'], ['gwt','iit','idealism','split-brain']),
 'evolution': (['mind'], ['predictive','split-brain','question-mind','abiogenesis']),
 'qm-foundations': (['matter'], ['delayed-choice','eraser','contextuality','relational']),
 'string': (['matter'], ['lqg','holography','emergent-spacetime','inflation']),
 'lqg': (['matter','origin'], ['string','emergent-spacetime','cyclic','inflation']),
 'holography': (['matter'], ['emergent-spacetime','string','participatory','qm-foundations']),
 'emergent-spacetime': (['matter','origin'], ['holography','lqg','string','relational']),
 'particle-identity': (['matter'], ['one-electron','recurrence','contextuality','qm-foundations']),
 'one-electron': (['matter','origin'], ['particle-identity','recurrence','delayed-choice','emergent-spacetime']),
 'recurrence': (['origin'], ['one-electron','cyclic','why-anything','fermi']),
 'delayed-choice': (['matter','mind'], ['eraser','participatory','qm-foundations','one-electron']),
 'eraser': (['matter','mind'], ['delayed-choice','qm-foundations','relational','contextuality']),
 'participatory': (['mind','matter','origin'], ['relational','holography','eraser','why-anything']),
 'relational': (['matter','mind'], ['participatory','eraser','emergent-spacetime','contextuality']),
 'contextuality': (['matter'], ['qm-foundations','eraser','relational','particle-identity']),
 'bigbang': (['origin'], ['inflation','dark','cyclic','question-origin']),
 'inflation': (['origin'], ['bigbang','cyclic','string','dark']),
 'dark': (['matter','origin'], ['bigbang','inflation','why-anything','cyclic']),
 'abiogenesis': (['origin'], ['fermi','bigbang','evolution','inflation']),
 'fermi': (['origin'], ['abiogenesis','dark','recurrence','inflation']),
 'cyclic': (['origin'], ['bigbang','inflation','recurrence','lqg']),
 'why-anything': (['origin'], ['cyclic','bigbang','question-origin','participatory']),
}

hit = set()
base = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'src', 'data')
files = sorted(glob.glob(os.path.join(base, 'topics-*.ts')))
for fp in files:
    with io.open(fp, encoding='utf-8') as f:
        lines = f.read().split('\n')
    out = []
    cur = None
    for ln in lines:
        out.append(ln)
        s = ln.strip()
        if s.startswith("id: '") and s.endswith("',"):
            cur = s[5:-2]
        if s.startswith('sectionAnchor:') and cur in MAPPING and cur not in hit:
            q, r = MAPPING[cur]
            out.append("    questions: [%s]," % ', '.join("'%s'" % x for x in q))
            out.append("    related: [%s]," % ', '.join("'%s'" % x for x in r))
            hit.add(cur)
    with io.open(fp, 'w', encoding='utf-8') as f:
        f.write('\n'.join(out))

missing = sorted(set(MAPPING) - hit)
extra = sorted(hit - set(MAPPING))
print('hit:', len(hit))
if missing: print('MISSING:', missing)
if extra: print('EXTRA:', extra)
sys.exit(1 if missing else 0)
