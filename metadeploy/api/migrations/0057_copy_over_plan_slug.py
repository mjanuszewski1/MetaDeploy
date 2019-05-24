# Generated by Django 2.1.7 on 2019-03-01 18:12

from django.db import migrations


def forwards(apps, schema_editor):
    PlanSlug = apps.get_model("api", "PlanSlug")

    for slug in PlanSlug.objects.all():
        slug.new_parent = slug.parent.plan_template
        slug.save()


class Migration(migrations.Migration):

    dependencies = [("api", "0056_planslug_new_parent")]

    operations = [
        # Unfortunately, we cannot coherently run this migration in
        # reverse; it is destructive moving forwards, so we leave off
        # the backwards migration.
        migrations.RunPython(forwards)
    ]
