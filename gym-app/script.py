import json

with open('exercise.json', 'r') as file:
    data = json.load(file)

for index, item in enumerate(data):
    item['id'] = index + 1

with open('data.json', 'w') as file:
    json.dump(data, file, indent=4)

print("IDs have been added and the file has been updated.")