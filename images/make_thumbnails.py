import os
import glob

movie_dir = './'
thumbnails_dir = 'thumbnails'
extensions = ['.jpg', '.jpeg', '.png', '.svg']

desired_width = 400  # [px]

list_images = []
for ext in extensions:
    list_images += glob.glob(os.path.join(movie_dir, '**/*' + ext))

for image in list_images:
    if 'favicon' not in image:
        print(image)
        thumb_path = os.path.join(thumbnails_dir, image.split(os.sep)[-1].split('.')[0] + '.png')
        if not os.path.isfile(thumb_path):
            #
            cmd = r'convert -thumbnail {} {} "{}"'.format(desired_width, image, thumb_path)
            # print(cmd)
            os.system(cmd)
