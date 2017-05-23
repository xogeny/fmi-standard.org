# This is from pyyaml
import yaml
# This is a standard module for Python 2.7 (I guess)
import json

def default(obj):
    """Default JSON serializer."""
    import calendar, datetime

    if isinstance(obj, datetime.datetime):
        if obj.utcoffset() is not None:
            obj = obj - obj.utcoffset()
        millis = int(
            calendar.timegm(obj.timetuple()) * 1000 +
            obj.microsecond / 1000
        )
        return millis
    return str(obj)
    #raise TypeError('Not sure how to serialize %s' % (obj,))

# All the versions
versions = ["FMI10", "FMI20"]
# All flavors of FMI
flavors = ["CoSimulation", "ModelExchange"]
# All platforms (c-code not supported with model exchange I guess)
platforms = ["c-code", "linux32", "linux64", "win32", "win64"]

obj = dict()

for version in versions:
    vobj = dict()
    for flavor in flavors:
        fobj = dict()
        for platform in platforms:
            name = "_data/results/results"+version+flavor+platform+".yml"
            try:
                with open(name, 'r') as stream:
                    fobj[platform] = yaml.load(stream)
            except:
                pass
        vobj[flavor] = fobj
    obj[version] = vobj

with open("results.json", "w") as fp:
    json.dump(obj, fp, default=default)
