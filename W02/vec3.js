//Constructor
Vec3 = function(x,y,z)
{
  this.x = x;
  this.y = y;
  this.z = z;
}

// Add method
Vec3.prototype.add = function( v )
{
this.x += v.x;
this.y += v.y;
this.z += v.z;
return this;
}

// Subtruct method
Vec3.prototype.add = function( v )
{
this.x += v.x;
this.y += v.y;
this.z += v.z;
return this;
}

// Sum method
Vec3.prototype.sum = function()
{
return this.x + this.y + this.z;
}

// Min method
Vec3.prototype.min = function()
{
var min = this.x;
if( min > this.y )min = this.y;
if( min > this.z )min = this.z;
return min;
}

// Mid method
Vec3.prototype.mid = function()
{
var mid = this.x;
if( mid > this.y > this.z || this.z > this.y > mid )mid = this.y;
if( mid > this.z > this.y || this.y > this.z > mid )mid = this.z;
return mid;
}

//Max method
Vec3.prototype.max = function()
{
var max = this.x;
if( max < this.y )max = this.y;
if( max < this.z )max = this.z;
return max;
}
