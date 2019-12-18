# Configuration file for the Sphinx documentation builder.
#
# This file only contains a selection of the most common options. For a full
# list see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Path setup --------------------------------------------------------------

# If extensions (or modules to document with autodoc) are in another directory,
# add these directories to sys.path here. If the directory is relative to the
# documentation root, use os.path.abspath to make it absolute, like shown here.
#
# import os
# import sys
# sys.path.insert(0, os.path.abspath('.'))
import json
import os

import sphinx_rtd_theme

on_rtd = os.environ.get('READTHEDOCS') == 'True'
# -- Project information -----------------------------------------------------

project = 'Connect Javascript SDK'
copyright = '2019, Ingram Micro Inc'
author = 'Ingram Micro Inc'

with open('../../package.json', 'r') as f:
    pkg_json = json.load(f)

# The full version, including alpha/beta/rc tags
release = pkg_json['version']


# -- General configuration ---------------------------------------------------

# Add any Sphinx extension module names here, as strings. They can be
# extensions coming with Sphinx (named 'sphinx.ext.*') or your custom
# ones.
extensions = [
    'sphinx_js',
    'sphinx_rtd_theme'
]

# Add any paths that contain templates here, relative to this directory.
templates_path = ['_templates']

# List of patterns, relative to source directory, that match files and
# directories to ignore when looking for source files.
# This pattern also affects html_static_path and html_extra_path.
exclude_patterns = []

master_doc = 'index'

# -- Options for HTML output -------------------------------------------------

# The theme to use for HTML and HTML Help pages.  See the documentation for
# a list of builtin themes.
#
html_theme = 'sphinx_rtd_theme'
html_logo = 'images/connect_logo_fullname.png'

# Add any paths that contain custom static files (such as style sheets) here,
# relative to this directory. They are copied after the builtin static files,
# so a file named "default.css" will overwrite the builtin "default.css".
html_static_path = ['_static']

# sphinx-js configuration
jsdoc_config_path = './jsdoc.conf.json'
js_source_path = '../lib'
if on_rtd:
    js_source_path = '../../lib'
primary_domain = 'js'