/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * @Author: JB (jb@codecorsair.com)
 * @Date: 2017-01-24 14:48:27
 * @Last Modified by: Andrew L. Jackson (jacksonal300@gmail.com)
 * @Last Modified time: 2017-04-05 14:25:18
 */
import { LayoutMode, Edge } from '../../../components/HUDDrag';
import Crafting from '../../../components/Crafting';

export default {
  position: {
    x: {
      anchor: 5,
      offset: -200,
    },
    y: {
      anchor: Edge.TOP,
      offset: 40,
    },
    size: {
      width: 650,
      height: 450,
    },
    scale: 1,
    opacity: 1,
    visibility: false,
    zOrder: 8,
    layoutMode: LayoutMode.GRID,
  },
  dragOptions: {
    lockHeight: true,
    lockWidth: true,
  },
  component: Crafting,
  props: {},
};
